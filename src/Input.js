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
    }

    return ( 
        <div className="input">
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button className="submit" >Submit</button>
            </form>
        </div>
     );
}
 
export default Input;
