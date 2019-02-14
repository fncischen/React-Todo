import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
     super(props);
    
     // the method reference to the to do list toggle method.
     this.toggle = this.props.toggle; 

      this.state = {
        completed: this.props.task.completed,
        strikethrough: "none"

        }
      }

    render() {

        // place all relevant css styling here:
        const strikethrough_properties = {
            textDecorationLine: this.state.strikethrough
        };

        // browswer view. Note that the toggle will send this specific ToDo Component to the To Do List; 
        return (
            <li style={strikethrough_properties} onClick={this.toggle(this)}> {this.props.task.task}</li>
        );
    }
}



export default ToDo;