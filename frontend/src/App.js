import FileAdder from "./FileAdder";
import FoodImage from './images/imageoffood.jpeg';
import LandingPage from "./landing";
import ListofThings from "./ListofThings";

function App() { //Takes care of FileAdder
    return (
        <div style={{ backgroundColor: 'powderblue' }}>

            <h1>AI Recipe App</h1>
            <img src={FoodImage} alt="food on table"></img>
            <LandingPage />
        </div>
    )
}

export default App;