import React from 'react';

const ToDo = props => {

    // event notation 
    return (
            <li className={`task${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggle(props.id)}> {props.task.task}</li>
    );
}



export default ToDo;