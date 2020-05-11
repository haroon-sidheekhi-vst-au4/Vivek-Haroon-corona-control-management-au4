import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.name}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.address}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.age}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.role}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.num}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.adnum}</td>
        
    </tr>
)

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('https://coronacaresystem.herokuapp.com/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('https://coronacaresystem.herokuapp.com/todos/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div style={{
                marginTop: 20,
                marginLeft:"280px",
                }}>
                <h3>Volunteer List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Responsibility</th>
                            <th>Mobile Num</th>
                            <th>Aadhar Num</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}