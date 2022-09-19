export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export interface TodoRequest {
  title: string;
  description: string;
}