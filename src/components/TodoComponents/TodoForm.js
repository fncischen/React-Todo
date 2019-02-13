import React from 'react';

const ToDoForm = props => {

    return (
        <form onSubmit={props.addTask}>
        
        <input type ="text"
        value = {props.task}
        name = "task"
        placeholder = "Task"
        onChange = {props.handleChanges}
        ></input>

        <button type="submit">Add Task</button>
        </form>
    );

};

export default ToDoForm;