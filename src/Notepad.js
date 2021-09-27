import React from 'react'
import Header from './Header'
import {useState} from 'react'
import Input from './Input'
import Display from './Display'

const Notepad = () => {

    const [taskList, setTaskList] = useState([])

    const addTask = (task) => {
        const randomNumber = Math.random()*100;
        const newTask = {id: randomNumber, task: task, completed: false};

        setTaskList([...taskList, newTask])
    }

    return ( 
    <div className="notepad">
        <Header ></Header>
        <Display taskList={taskList} setTaskList={setTaskList}></Display>
        <Input addTask={addTask}></Input>
    </div> 
    );
}
 
export default Notepad;