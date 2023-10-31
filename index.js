const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
var cors = require('cors');
const fs = require('fs');
const axios = require('axios')
app.use(cors());
app.use(bodyParser.json());



const filesPayloadExists = require('./middleware/FilesPayloadExists');
const fileExtLimiter= require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');


app.post('/fileupload', fileUpload({createParentPath: true}),
filesPayloadExists, fileExtLimiter(['.png', '.jpg', '.jpeg']),fileSizeLimiter,
    (req, res)=>{
        const files = req.files;
        //console.log(files);
        Object.keys(files).forEach(async (key)=>{
            const filePath = path.join(__dirname, files[key].name);

            await new Promise((resolve, reject) => {
                files[key].mv(filePath, (err) => {
                    if (err) {
                        return res.status(500).json({status: "error", message: err});
                    }
                    resolve();
                });
            });
           
            const blob = fs.readFileSync(filePath);

            s3.putObject({
                Bucket: 'awsrecipedataproject',
                Key: files[key].name,
                Body: blob
            }).promise();

            fs.unlinkSync(filePath);
            
            const response = await axios.post("https://unun3h68ja.execute-api.us-east-1.amazonaws.com/test/rekognition", {
                "Records": [
                  {
                    "s3": {
                      "bucket": {
                        "name": "awsrecipedataproject",
                        "ownerIdentity": {
                          "principalId": "EXAMPLE"
                        },
                        "arn": "arn:aws:s3:::awsrecipedataproject"
                      },
                      "object": {
                        "key": `${files[key].name}`,
                        "eTag": "d03688743fde31b37e81ca3814aee190",
                        "sequencer": "0A1B2C3D4E5F678901"
                      }
                    }
                  }
                ]
            });
            res.send(response.data);

        })
    }
)


const PORT = 5004;
app.listen(PORT);

