// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import ToDo from "./Todo";
import ToDoForm from "./TodoForm";
import React from 'react';


const listOfTasks = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        
        // place which arguments can change the state of this React Component:

        // state = mutable properties
        // prop = immutable properties

        // each time the state changes, it updates the render method()
        this.state = {
            tasks: listOfTasks,
            task: "",
            id: "",
            completed: ""
        };

    }

    addTask = e => {
        // use preventDefault to override default behaviour
        e.preventDefault();
        // https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46

        const newTask = {
            task: this.state.task,
            id: Date.now(),
            completed: false
        }

        console.log(newTask);
        // call setState to tell the computer directly 
        this.setState({
            tasks: [... listOfTasks, newTask],
            task: "",
            id: "",
            completed: ""
        });
    }

    clearCompleted = e => {
        // use preventDefault to override default behaviour
        e.preventDefault();
        // https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46


    }

    // track changes on the form :)
    handleChanges = e => {
        console.log(e.target.value);
        //     this.setState({ name: e.target.value })
        this.setState({
          [e.target.name]: e.target.value
    })
    };

    render() {

        return (

            // use map to map all data from the listOfTasks
            
            // note the method binding on the ToDo Form.
            <div className="ToDoList">
                <ul>
                {this.state.tasks.map ( (task,key) =>
                    <ToDo key={key} task={task} />                    
                )}
                </ul>
                
                <ToDoForm
                    addTask = {this.addTask}
                    value = {this.state.task}
                    handleChanges = {this.handleChanges}
                    onClear = {this.clearCompleted}
                />

            </div>
        
        );
    }
}

export default ToDoList; 