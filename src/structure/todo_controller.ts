import { ITodoUsecase } from "./usecases/todos_interface";
import { ITodo } from "./entities/todo_interface";

export class TodoController {
  constructor(private todoUseCase: ITodoUsecase) {}
  addTodo(text: string) {
    console.log("controller:addTodo before", text);
    this.todoUseCase.addTodo({ text });
    console.log("controller:addTodo after", text);
  }
  getTodos(state: any): Array<ITodo> {
    console.log("controller:getTodos");
    return this.todoUseCase.getTodos(state).todos;
  }
}
