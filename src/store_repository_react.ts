import { ITodo, ITodos } from "./structure/entities/todo_interface";
import { IStoreRepository } from "./structure/store/store_repository";
// 以下react依存
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ITodoState, ITask } from "./reducer";
import { addTodo } from "./action";

export interface IStoreRepositoryConstructor {
  dispatch: Dispatch<AnyAction>;
}

export class StoreRepository implements IStoreRepository {
  constructor(private dispatch: Dispatch<AnyAction>) {}
  addTodo(text: string): void {
    console.log("repository:addTodo before", text);
    this.dispatch(addTodo(text));
    console.log("controller:addTodo after", text);
  }
  getTodos(state: ITodoState): ITodos {
    console.log("controller:getTodos");
    return {
      todos: state.tasks.map(
        (task: ITask): ITodo => {
          return {
            text: task.text
          };
        }
      )
    };
  }
}
