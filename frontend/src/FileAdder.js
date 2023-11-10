import {useState} from 'react';
import axios from 'axios';
function FileAdder(){ //added functionality for more use cases 
    const [describe, setDescribe] = useState('');
    const sendFiles = async ()=>{
        const myFiles = document.getElementById('myFiles').files;
        const formData = new FormData();
        Object.keys(myFiles).forEach((key)=>{
            formData.append(myFiles.item(key).name, myFiles.item(key))
        })
        const res = await axios.post('http://localhost:5004/fileupload', formData);
        console.log(res);
        const jsonStringWithDoubleQuotes = res.data.replace(/'/g, '"');
        const obj= JSON.parse(jsonStringWithDoubleQuotes);

        const diff =obj.Labels.map((curr, index)=>{
            return <ul key={index}>{curr.Name}</ul>
        });

        setDescribe(diff);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        sendFiles();
    }

    return(
        <div style={{backgroundColor: 'orange', display: 'flex', padding: 20, alignItems:'center'}}>
            <br></br>
            <form id="uploadForm" onSubmit={handleSubmit} >
                <input id="myFiles" type="file" accept="image/*" ></input>
                <br></br>
                <button>Submit!</button>
                {describe}
            </form>
        </div>
    )
}
export default FileAdder;
