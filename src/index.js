import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ToDoList from './components/TodoComponents/TodoList';
import './styles.css';


render(<ToDoList />, document.getElementById('root'));
