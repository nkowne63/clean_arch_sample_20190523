import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { buildTodoStore } from "./store";
import TodoContainer from "./TodoContainer";

const App: React.FC = () => {
  return (
    <Provider store={buildTodoStore()}>
      <TodoContainer />
    </Provider>
  );
};

export default App;
