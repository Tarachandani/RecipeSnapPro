import {useState} from 'react';
import CardImage from './CardImage';
import './style/styles.css'

function ListofThings(){
    const [clicked, setClicked] = useState(false);
    const [term, setTerm] = useState('');
    const [dummyTerm, setDummyTerm] = useState('');
    const handleChange=(event)=>{
        //console.log(event.target.value);
        setDummyTerm(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setClicked(true);
        setTerm(dummyTerm);
    }
    const answertoparam  = clicked ? <CardImage term={term}></CardImage> : <div></div>;
    return(
        <div>  
            <h1>Generate Recipe:</h1>
            <form onSubmit={handleSubmit}>
                <input className="rounded" onChange={handleChange}></input>
                <button className="button-27" onClick={handleSubmit}>Generate</button>
            </form>
            {answertoparam}
        </div>
    )
}
export default ListofThings;