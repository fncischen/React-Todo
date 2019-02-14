import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
     super(props);

      this.state = {
        completed: this.props.task.completed,
        // my original plan, but this doesn't work
        // strikethrough: {
        // textDecoration: "none"

        strikethrough: "none"

        }
      }

      // console.log(this.props.task);
      // console.log(this.state);

        // toggle
    toggle = e => {
        e.preventDefault();

        console.log(this.state.completed);
        if (this.state.completed == false) {
            this.setState(
                {completed: true,
                strikethrough: "line-through"}
            );
        }
        else {
            this.setState(
                {completed: false,
                strikethrough: "none"}
            );
        };
    }

    render() {

        // place all relevant css styling here:
        const strikethrough_properties = {
            textDecorationLine: this.state.strikethrough,
            color: "purple"
        };

        // browswer view
        return (
            <li style={strikethrough_properties} onClick={this.toggle}> {this.props.task.task}</li>
        );
    }
}



export default ToDo;