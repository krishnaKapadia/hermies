import * as React from "react";
import Card from "../../../Components/Card";
import { Table } from "../../../Components/Table";
import { connect } from "react-redux";
import { getColumns, getTasks } from "../../Selectors";
import { GlobalState } from "../../../GlobalReducer";
import { Task } from "../Models/TaskStore";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { CompleteTask } from "../Actions";

type StateProps = {
	tasks: Task[];
	columns: string[];
};

type DispatchProps = {
	completeTask: (task: Task) => void;
};

type Props = StateProps & DispatchProps;
const TaskView: React.FunctionComponent<Props> = ({ tasks, columns, completeTask }) => (
		<div className="Section">
			<Card footer={(<NavLink to={"/createTask"} style={{ textDecoration: 'none' }} className={"submit-button"}><h3>+ Add Task</h3></NavLink>)}
			>

				<Table columns={columns} tasks={tasks} completeTask={completeTask} />

				<div className="Section">

				</div>
			</Card>
		</div>
);

export default connect( (state: GlobalState) =>
	({
		tasks: getTasks(state),
		columns: getColumns(state)
	}),
	(dispatch: Dispatch) => ({
		completeTask: (payload: Task) => dispatch(CompleteTask(payload))
	})
)(TaskView);