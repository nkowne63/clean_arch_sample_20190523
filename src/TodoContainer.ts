import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { ITodoState } from "./reducer";
import TodoComponent from "./TodoComponent";

const mapStateToProps = (state: ITodoState) => state;
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
