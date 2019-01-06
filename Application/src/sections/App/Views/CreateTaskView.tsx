import * as React from "react";
import { connect } from "react-redux";
import Card from "../../../Components/Card";
import { IStyle } from "fela";
import { createComponent } from "react-fela";
import { Dispatch } from "redux";
import { NewTask } from "../Models/TaskStore";
import { withRouter } from "react-router";
import { CreateTask } from "../Actions";

const StyledInput = (): IStyle => ({
	width: '100%',
	height: '10vmax',
	marginTop: '15px'
});
const FelaInput = createComponent(StyledInput, 'input');

type StateProps = {
	inputDesc: string
};

type DispatchProps = {
	createTask: (payload: NewTask) => void;
};

type DispatchState = { };

type Props = StateProps & DispatchProps;
type State = {
	inputDesc: string;
};

class CreateTaskView extends React.Component<Props, State> {

	public constructor(props) {
		super(props);

		this.state = {
			inputDesc: ''
		};
	}

	public render() {
		return (
				<div className="Section">
					<Card footer={(
							<div
									className="submit-button"
							     onClick={() => this.props.createTask({ name: this.state.inputDesc})}
							>
								<h3>Save Task</h3>
							</div>
					)}
					>
						<h3>New Task</h3>

						<div className="Form">
							<form action="#" style={{textAlign: 'left'}}>
								<span>Task Description:</span>
								<input type="textarea" onChange={(input) => this.setState({ inputDesc: input.target.value })} />
							</form>
						</div>
					</Card>
				</div>
		);
	}
}

export default connect<{}, DispatchProps>(
		null,
		(dispatch: Dispatch) => ({
	createTask: (payload: NewTask) => dispatch(CreateTask(payload))
}))(CreateTaskView);