import { TodoController } from "./controller/todo_controller";
import { StoreInteractor } from "./store_interactor";
import { IStoreRepository } from "./store/store_repository";

export const todoControllerFactory = (
  repository: IStoreRepository
): TodoController => {
  const interactor = new StoreInteractor(repository);
  return new TodoController(interactor);
};
