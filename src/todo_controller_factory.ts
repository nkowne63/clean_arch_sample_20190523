import { todoControllerFactory } from "./structure/todo_controller_factory";
import { TodoController } from "./structure/todo_controller";

import {
  IStoreRepositoryConstructor,
  StoreRepository
} from "./store_repository_react";

export const reactTodoControllerFactory = (
  param: IStoreRepositoryConstructor
): TodoController => {
  return todoControllerFactory(new StoreRepository(param.dispatch));
};
