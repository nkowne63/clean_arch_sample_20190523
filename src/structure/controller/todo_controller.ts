import { ITodoUsecase } from "../usecases/todos_interface";
import { ITodo } from "../entities/todo_interface";

export class TodoController {
  constructor(private todoUseCase: ITodoUsecase) {}
  addTodo(text: string) {
    console.log("controller:addTodo", text);
    this.todoUseCase.addTodo({ text });
  }
  getTodos(state: any): Array<ITodo> {
    return this.todoUseCase.getTodos(state).todos;
  }
}
