import { ITodos } from "../entities/todo_interface";

export interface IStoreRepository {
  addTodo: (todo: string) => void;
  getTodos: (state: any) => ITodos;
}
