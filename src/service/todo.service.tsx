import axios from "axios";
import { Todo, TodoRequest } from "../model/todo";

// const Url = "http://localhost:8080/api/todo";
const Url = "http://localhost:1323/todos"

export class TodoService {

    public static async getAllTodo(): Promise<Todo[]> {
        const url = `${Url}`;
        const res = await axios.get<Todo[]>(url);
        return res.data;
    }

    public static async addTodo(todo: TodoRequest): Promise<Todo> {
        const url = `${Url}`;
        const res = await axios.post<Todo>(url, todo);
        return res.data;
    }

    public static async updateTodo(todo: Todo): Promise<Todo> {
        const url = `${Url}/${todo.id}`;
        const res = await axios.put<Todo>(url, todo);
        return res.data;
    }
}

// export const getTodos = () => {
//   return axios.get("http://localhost:3000/todos");
// };

// export const addTodo = (todo: any) => {
//   return axios.post("http://localhost:3000/todos", todo);
// };

// export const completeTodo = (id: string) => {
//   return axios.patch(`http://localhost:3000/todos/${id}`);
// };

// export const removeTodo = (id: string) => {
//   return axios.delete(`http://localhost:3000/todos/${id}`);
// };
