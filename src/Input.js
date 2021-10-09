import React from 'react'
import {useState} from 'react'

const Input = (props) => {

    const [currentText, setCurrentText] = useState();

    const handleChange = (e) =>{
        console.log(e.target.value);
        setCurrentText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(currentText);
        console.log(currentText);
        setCurrentText('')
    }

    return ( 
        <div className="input">
            <form onSubmit={handleSubmit}>
            <input type="text" value={currentText} onChange={handleChange}/>
            <button className="submit" >Submit</button>
            </form>
        </div>
     );
}
 
export default Input;
