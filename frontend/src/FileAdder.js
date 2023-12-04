import {useState} from 'react';
import axios from 'axios';
import RecipesList from './RecipesList';
import './styles.css';
function FileAdder(){ //added functionality for more use cases 
    const [describe, setDescribe] = useState('');
    const [nextlist, setNextList] = useState('');
    const delay = ms => new Promise(res => setTimeout(res, ms));

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
        
        //await delay(5000);
        setDescribe(diff);
        //console.log(diff);

        setNextList(<RecipesList ingredientlist={diff}></RecipesList>);

        
        //console.log(diff);
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
            <input id="myFiles" type="file" accept="image/*" style={{ display: 'none' }} />
            <label htmlFor="myFiles" className="button-85">Choose File</label>
                <br></br>
                <br></br>
                <button className = "button-85" onSubmit={handleSubmit}>Submit!</button>
            </form>
        <div>
         {nextlist}
        </div>

        </div>
    )
}
export default FileAdder;
