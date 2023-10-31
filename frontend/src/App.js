import FileAdder from "./FileAdder";
import FoodImage from './images/imageoffood.jpeg';
import ListofThings from "./ListofThings";

function App(){ //Takes care of FileAdder
    return(
        <div style={{backgroundColor: 'powderblue'}}>
            
            <h1>AI Recipe App</h1>
            <img src={FoodImage} alt="food on table"></img>
            <br></br>
            <text><text>Please lay out your ingredients (like shown above):</text></text>
            <FileAdder ></FileAdder>
            <ListofThings></ListofThings>
        </div>
    )
}

export default App;
