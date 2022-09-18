import React from "react";
import TodoList from "./todolist";
import "./index.scss";
import TodoLogo from "../todo.png";
import { Todo } from "../model/todo";

export const HomePage: React.FC = () => {
    const [todos] = React.useState<Todo[]>([
        {
            id: "1",
            text: "Learn React",
            description: "Learn React",
            completed: false,
        },
        {
            id: "2",
            text: "Learn TypeScript",
            description: "Learn TypeScript",
            completed: false,
        },
        {
            id: "3",
            text: "Learn GraphQL",
            description: "Learn GraphQL",
            completed: false,
        },
    ]);

    // const addTodo = (todo: any) => {
    //     const newTodos = [todo, ...todos];
    //     setTodos(newTodos);
    // };

    // const completeTodo = (id: string) => {
    //     let updatedTodos = todos.map((todo) => {
    //         if (todo.id === id) {
    //             todo.completed = !todo.completed;
    //         }
    //         return todo;
    //     });
    //     setTodos(updatedTodos);
    // };

    // const removeTodo = (id: string) => {
    //     const removedArr = [...todos].filter((todo) => todo.id !== id);
    //     setTodos(removedArr);
    // };

    return (
        <div className="app">
            <div className="layout">
                <img src={TodoLogo} alt="todo-logo" style={{ width: "50px" }} />
                <label> To Do </label>
            </div>
            <div className="container">
                <h1 className="topic">To Do List</h1>
                <TodoList todos={todos} />
            </div>
        </div>
    );
};

export default HomePage;
