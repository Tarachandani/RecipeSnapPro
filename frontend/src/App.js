import FileAdder from "./FileAdder";
import FoodImage from './images/imageoffood.jpeg';
function App(){
    return(
        <div>
            <h1>AI Recipe App</h1>
            <img src={FoodImage} alt="food on table"></img>

            <FileAdder></FileAdder>
        </div>
        
    )
}
export default App;