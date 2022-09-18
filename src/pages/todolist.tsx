import React from "react";
import { Checkbox } from "primereact/checkbox";
import { Todo } from "../model/todo";

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = (props) => {

    const { todos } = props;
    return (
        <div className="card">
            {todos.map((todo) => (
                <div className="todo" key={todo.id}>
                    <Checkbox
                        inputId={todo.id}
                        checked={todo.completed}
                        // onChange={() => props.completeTodo(todo.id)}
                    />
                    <label htmlFor={todo.id} style={{ marginLeft: '10px' }}>
                        {todo.text}
                    </label>

                </div>
            ))}
        </div>
    );
};

export default TodoList;