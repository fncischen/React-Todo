// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import ToDo from "./Todo";
import ToDoForm from "./TodoForm";
import React from 'react';
import ReactDOM from 'react-dom';

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
        
        this.state = {
            tasks: listOfTasks,
            task: "",
            id: "",
            completed: ""
        };

    }

    addTask = e => {
        e.preventDefault();

        const newTask = {
            task: this.state.task,
            id: Date.now(),
            completed: false
        }

        console.log(newTask);
        // call setState to tell the computer directly 
        this.setState({
            tasks: [... this.state.tasks, newTask],
        });
        console.log(this.state);
    }

            // toggle
    toggle = (itemKey) => {

            this.setState({
                tasks: this.state.tasks.map(task => {
                     if (itemKey == task.id) {
                            return {
                                task: task.task,
                                id: task.id,
                                completed: !task.completed
                            };
                        }
                            return task;
                    })
            });

            console.log("toggled!");
    }

    clearCompleted = e => {
        console.log("clearing completed!");
        
        const notcompleted = this.state.tasks.filter(task => task.completed == false);
        
        // place that array onto set state 
        this.setState({tasks: notcompleted});
        
        // check console
        console.log(this.state.tasks);

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

            <div className="ToDoList">
                <ul>
                {this.state.tasks.map ( task =>
                    <ToDo key={task.id} task={task} toggle = {this.toggle} />                    
                )}
                </ul>
                
                <ToDoForm
                    addTask = {this.addTask}
                    value = {this.state.task}
                    handleChanges = {this.handleChanges}
                    clearCompleted = {this.clearCompleted}
                />

            </div>
        
        );
    }
}

export default ToDoList; 