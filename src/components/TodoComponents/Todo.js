import React from 'react';

function ToDo(props) {
    //constructor(props) {

        // not all data should be rendered, but can be
        // stored for future use
      //  super(props);
      //  this.state = {
      //    completed: this.props.completed
      //  }

    // browswer view
        return(
            <li>{props.task.task}</li>
        );
}




export default ToDo;