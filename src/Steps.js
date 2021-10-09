import React from 'react'

const Steps = () => {
    return ( 
        <div className="steps">
            <h1>Step by step programming guide</h1>
            <ol>
                <li>NOTEPAD PARENT - Import State in notepad </li>
                <p>import &#123;useState&#125; from 'react'</p>
                <li>NOTEPAD PARENT - Declare Name and stateSetter name</li>
                <p> const [taskList, setTasklist] = useState([])</p>
                <li>NOTEPAD PARENT - Can't set state directly, use function and spread old state. <br/>
                Give object keys of ID, Task and Complete</li>
                <p>
                const addTask = (task) =&gt; &#123; <br/>
        const randomNumber = Math.random()*100; <br/>
        const newTask = &#123;id: randomNumber, task: task, completed: false&#125;; <br/>

        setTasklist([...taskList, newTask])
        &#125;
                </p>
                <li>NOTEPAD PARENT - Input cant be passed up to notepad parent from input child, <br/>
                    so pass addTask function down through props
                </li>
                <p>  addTask=&#123;addTask&#125; </p>
                <li>INPUT CHILD - On Change store input text value in state</li>
                <p>onChange=&#123;handleChange&#125; <br/>
                const handleChange = (e) =&gt; &#123; <br/>
        console.log(e.target.value); <br/>
        setCurrentText(e.target.value); <br/>
        &#125;
                </p>
                <li>INPUT CHILD - onSubmit run props.addTask with text stored in state</li>
                <p>onSubmit=&#123;handleSubmit&#125; <br/>
                const handleSubmit = (e) =&gt; &#123; <br/>
                e.preventDefault();<br/>
                props.addTask(currentText);<br/>
                console.log(currentText);<br/>
                &#125;
                </p>
                <li>NOTEPAD PARENT - With text now set in parent-notepad state, pass it down to child display</li>
                <p>taskList=&#123;tasklist&#125; </p>
                <li>DISPLAY CHILD - Map props.taskList and return each task in HTML element and buttons</li>
                <p> &#123;props.taskList.map((task) =&gt; &#123;<br/>
                    return &lt;h3 key=&#123;task.id&#125;&gt;&#123;task.task&#125; &lt;h3&gt; <br/>
                    &#125; )&#125;</p>
                <li>DISPLAY CHILD - Onclick run handle click function,<br/> 
                compare button name to mapped over tasklist, <br/> 
                and change task.completed. Set new array to replace state tasklist</li>
                <p>onClick=&#123;() =&gt; handleStrikeout(task.task)&#125; <br/>
                    <br/>
                    const handleStrikeout = (task) =&gt; &#123;  <br/>
        console.log(task)  <br/>
        const updatedTaskList = props.taskList.map((singleTask) =&gt; &#123; <br/>
            if (singleTask.task === task) &#123; <br/>
                singleTask.completed = !singleTaskcompleted <br/>
                &#125;  <br/>
            return singleTask  <br/>
            &#125;)   <br/>
        props.setTaskList(updatedTaskList) <br/>
        &#125;  <br/>
                </p>
                <li>DISPLAY CHILD - Cross off - Ternary operator and task.completed boolean <br/>
                determine classname of text div, which changes CSS colour and line-through </li>
                <p>className=&#123;task.completed ? "strikeout-completed" :"strikeout-not-completed" &#125;
</p>
                <li>DISPLAY CHILD - Delete - onClick filter proprs.tasklist <br/>
                and return array of all that does not match name passed in by button <br/>
                Set new array to replace old state tasklist.
                </li>
                <p>
                onClick= &#123; () =&gt; handleDelete(task.task)&#125; <br/>
                const handleDelete = (task) =&gt; &#123;    <br/>
        const listUpdatedForDeletion = props.taskList.filter((singletask) =&gt; &#123;  <br/>
            return task !== singletask.task  <br/>
            &#125; )   <br/>
        props.setTaskList(listUpdatedForDeletion)  <br/>
    &#125; 
                </p>
                <li>To wipe clean form on submit = reset state on submit form, and set value of form to state</li>
            <p>        setCurrentText('')</p>
            <p>            &lt;input type="text" value=&#123;currentText&#125; onChange=&#123;handleChange&#125;/&gt; </p>
            </ol>
        </div>
     );
}
 
export default Steps;