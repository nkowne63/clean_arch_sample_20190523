import { ITodoUsecase } from "./usecases/todos_interface";
import { ITodo, ITodos } from "./entities/todo_interface";
import { IStoreRepository } from "./store/store_repository";

export class StoreInteractor implements ITodoUsecase {
  constructor(private storeRepository: IStoreRepository) {}
  addTodo(todo: ITodo): void {
    console.log("interactor:addTodo before", todo);
    this.storeRepository.addTodo(todo.text);
    console.log("interactor:addTodo after", todo);
  }
  getTodos(state: any): ITodos {
    console.log("interactor:getTodos");
    return this.storeRepository.getTodos(state);
  }
}
