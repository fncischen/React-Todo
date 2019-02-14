import React from 'react';

const ToDoForm = props => {

    return (
        <div className="form">
        <form onSubmit={props.addTask}>
        
        <input type ="text"
        value = {props.task}
        name = "task"
        placeholder = "Task"
        onChange = {props.handleChanges}
        ></input>

        <button type="submit">Add Task</button>
        </form>

        <button onClick={props.clearCompleted}>Clear Completed</button>

        </div>
    );

};

export default ToDoForm;