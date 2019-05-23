import React from "react";
import { Dispatch, AnyAction } from "redux";
import { ITodoState } from "./reducer";

import { reactTodoControllerFactory as todoControllerFactory } from "./todo_controller_factory";
import { TodoController } from "./structure/controller/todo_controller";
import { ITodo } from "./structure/entities/todo_interface";

interface IProps extends ITodoState {
  dispatch: Dispatch<AnyAction>;
}

interface IState {
  text: string;
}

export default class extends React.Component<IProps, IState> {
  private controller: TodoController;
  constructor(props: IProps) {
    super(props);

    this.state = {
      text: ""
    };

    this.controller = todoControllerFactory({
      dispatch: this.props.dispatch
    });
  }

  public addTodo = () => {
    this.controller.addTodo(this.state.text);
  };
  public renderTodoList = () =>
    this.controller.getTodos(this.props).map((todo: ITodo, idx: number) => {
      return <li key={idx}>{todo.text}</li>;
    });

  public render() {
    return (
      <section style={{ width: "500px", margin: "0 auto" }}>
        <h1>MY TODO LIST</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ text: e.currentTarget.value });
          }}
        />
        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          Add Todo
        </button>
        <ul>{this.renderTodoList()}</ul>
      </section>
    );
  }
}
