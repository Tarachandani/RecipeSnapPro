import {useState} from 'react';
import axios from 'axios';
import RecipesList from './RecipesList';
function FileAdder(){ //added functionality for more use cases 
    const [describe, setDescribe] = useState('');
    const [nextlist, setNextList] = useState('');
    const sendFiles = async ()=>{
        const myFiles = document.getElementById('myFiles').files;
        const formData = new FormData();
        Object.keys(myFiles).forEach((key)=>{
            formData.append(myFiles.item(key).name, myFiles.item(key))
        })
        const res = await axios.post('http://localhost:5004/fileupload', formData);
        //console.log(res);
        const jsonStringWithDoubleQuotes = res.data.replace(/'/g, '"');
        const obj= JSON.parse(jsonStringWithDoubleQuotes);

        const diff =obj.Labels.map((curr, index)=>{
            return <ul key={index}>{curr.Name}</ul>
        });

        setDescribe(diff);
        
        //console.log(diff);
        setNextList(<RecipesList ingredientlist={diff}></RecipesList>);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        sendFiles();

        
    }

    return(
        /*<div style={{backgroundColor: '#74c7ed', display: 'flex', padding: 20, alignItems:'center'}}>*/
        <div>
            <br></br>
            <form id="uploadForm" onSubmit={handleSubmit} >
                <input className="hide_file" id="uploadForm" type="file" accept="image/*" ></input>
                <button >Choose File</button>
                <br></br>
                <br></br>
                <button >Submit!</button>
                {describe}
            </form>
        <div>
         {nextlist}
        </div>

        </div>
    )
}
export default FileAdder;
