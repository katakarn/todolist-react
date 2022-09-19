import React, { useCallback } from "react";
import TodoList from "./todolist";
import "./index.scss";
import TodoLogo from "../todo.png";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import AddTodo from "./addTodo";
import { Button } from "react-rainbow-components";

const mockData: Todo[] = [
    {
        id: "1",
        title: "Learn React",
        description: "Learn React",
        isDone: false,
    },
    {
        id: "2",
        title: "Learn Typescript",
        description: "Learn Typescript",
        isDone: false,
    },
    {
        id: "3",
        title: "Learn React-Redux",
        description: "Learn React-Redux",
        isDone: false,
    },
];

export const HomePage: React.FC = () => {

    const [todos, setTodos] = React.useState<Todo[]>(mockData);
    // const [todos, setTodos] = React.useState<IToDoItem[]>([]);
    const [visible, setVisible] = React.useState<boolean>(false);

    const fetchData = useCallback(() => {
        TodoService.getAllTodo().then((todos) => {
            setTodos(todos);
        });
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

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
                <label> To Do</label>
            </div>
            <div className="container">
                <h1 className="topic">To Do List <b style={{ fontWeight: "lighter", font: "small" , fontSize: "20px", color: "gray"}}>[{todos.length}]</b></h1>
                <div className="card">
                    <TodoList todos={todos} />
                    <Button label="+ Add task" onClick={() => { setVisible(true) }}></Button>
                </div>
            </div>
            <AddTodo onHide={() => { fetchData(); setVisible(false); }} visible={visible} />
        </div>
    );
};

export default HomePage;
