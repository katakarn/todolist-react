import React from "react";
import { Checkbox } from "primereact/checkbox";
import { Todo } from "../model/todo";
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from "react-beautiful-dnd";

interface TodoListProps {
    todos: Todo[];
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    //   padding: 10,
    //   margin: `0 50px 15px 50px`,
    //   background: isDragging ? "#4a2975" : "white",
    //   color: isDragging ? "white" : "black",
    //   border: `1px solid black`,
    //   fontSize: `20px`,
    //   borderRadius: `5px`,
  
    ...draggableStyle,
  });

export const TodoList: React.FC<TodoListProps> = (props) => {

    const onDragEnd = (result: DropResult) => {
        console.log(result);
    };

    const { todos } = props;
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo">
                {(provided) => (
                    <div
                        className=""
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <div>
                            {todos.map((todo, index) => {
                                return (
                                    <Draggable
                                        key={todo.id}
                                        draggableId={todo.id}
                                        index={index}>
                                        {(provided, snapshot) =>
                                        (
                                            <div className="todo" key={todo.id} ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <Checkbox
                                                    inputId={todo.id}
                                                    checked={todo.isDone}
                                                // onChange={() => props.completeTodo(todo.id)}
                                                />
                                                <div className="info">
                                                    <div className="title">
                                                        <label htmlFor={todo.id} style={{ marginLeft: '10px' }}>
                                                            {todo.title}
                                                        </label>
                                                    </div>
                                                    <div className="description">
                                                        <label htmlFor={todo.id} style={{ marginLeft: '10px' }}>
                                                            {todo.description}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                        </div>
                    </div>)}
            </Droppable>
        </DragDropContext>

    );
};

export default TodoList;