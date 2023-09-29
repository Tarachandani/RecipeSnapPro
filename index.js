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
        //do something
    }
)


const PORT = 5004;
app.listen(PORT);

