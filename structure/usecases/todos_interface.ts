import { ITodos, ITodo } from "../entities/todo_interface";
export interface ITodoUsecase {
  addTodo: (todo: ITodo) => void;
  getTodos: (state: any) => ITodos;
}
