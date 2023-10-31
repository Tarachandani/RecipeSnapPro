import {useState} from 'react';
import ImageCard from './ImageCard';
function ListofThings(){
    const [clicked, setClicked] = useState('');
    const handleClick = (event)=>{
        event.preventDefault();
        setClicked(true);
    }
    const answertoparam  = clicked ? <ImageCard></ImageCard>: <div></div>
    return(
        <div>  
            <h1>Generate Random Recipe:</h1>
            <button onClick={handleClick}>Generate</button>
            {answertoparam}
        </div>
    )
}
export default ListofThings;