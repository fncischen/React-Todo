import React from 'react';

const ToDo = props => {

    // event notation 
    return (
            <li onClick={() => props.toggle(props.id)}> {props.task.task}</li>
    );
}



export default ToDo;