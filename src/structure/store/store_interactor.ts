import { ITodoUsecase } from "../usecases/todos_interface";
import { ITodo, ITodos } from "../entities/todo_interface";
import { IStoreRepository } from "./store_repository";

export class StoreInteractor implements ITodoUsecase {
  constructor(private storeRepository: IStoreRepository) {}
  addTodo(todo: ITodo): void {
    console.log("interactor:addTodo", todo);
    this.storeRepository.addTodo(todo.text);
  }
  getTodos(state: any): ITodos {
    return this.storeRepository.getTodos(state);
  }
}
