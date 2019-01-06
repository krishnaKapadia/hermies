import * as React from 'react';
import { connect } from "react-redux";
import { GlobalState } from "../../GlobalReducer";
import { History, Router } from "../../Utils/React-Router";
import * as Selectors from "../Selectors";
import './index.css';
import { AppState } from "./Models";
import { Task } from "./Models/TaskStore";
import AppRoutes from './Routes';
import { fetchTasks } from "./Sagas";
import { Dispatch } from "redux";
import { FetchTasks } from "./Actions";
import { NavigationBar } from "../../Components/NavigationBar/Base";

type StateProps = {
	tasks: Task[];
	columns: string[];
};

type DispatchProps = {
	fetchTasks: () => void;
};

type Props = StateProps & DispatchProps;
class App extends React.Component<Props> {

	componentDidMount(): void {
		this.props.fetchTasks();
	}

	public render() {

		return (
			<div className="App">
				<NavigationBar />

				<div className="Title">
					<h1>TODO</h1>

					<div className="Subtitle">
						<h3>Achieve more</h3>
					</div>
				</div>

				<Router history={History} routes={AppRoutes} />
			</div>
		);
	}
}

type AppStates = GlobalState & AppState;
export default connect((state: AppStates) => ({
	tasks: Selectors.getTasks(state),
	columns: Selectors.getColumns(state)
}),(dispatch: Dispatch) => ({
	fetchTasks: () => dispatch(FetchTasks())
})
)(App);
