import React from 'react';

const ToDo = props => {

    return (
            <li onClick={() => props.toggle(props.id)}> {props.task.task}</li>
    );
}



export default ToDo;