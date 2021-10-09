import React from 'react';


const Display = (props) => {

    const handleStrikeout = (task) => {
        console.log(task)
        const updatedTaskList = props.taskList.map((singleTask) => {
            if (singleTask.task === task) {
                singleTask.completed = !singleTask.completed
            }
            return singleTask
        })
        props.setTaskList(updatedTaskList)
    }

    const handleDelete = (task) => {
        const listUpdatedForDeletion = props.taskList.filter((singletask) => {
            return task !== singletask.task
        })
        props.setTaskList(listUpdatedForDeletion)
    }

    return ( 
    <div className="display">
     {props.taskList.map((task) => {
         return <div   
                className='strikeout-not-completed'
                key={task.id}>
                    <h3 
                     className={task.completed ? "strikeout-completed" :"strikeout-not-completed" }
                    >{task.task}</h3>
                    <div className="buttons">
                         <button 
                         onClick={() => handleStrikeout(task.task)}>Cross Off</button>
                         <button 
                         onClick={() => handleDelete(task.task)} 
                         className="delete">Remove</button>
                     </div>
                </div>
             } )}
    </div> 
    );
}
 
export default Display;