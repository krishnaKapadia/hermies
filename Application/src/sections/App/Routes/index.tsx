import * as React from "react";
import { Route } from "react-router-dom";
import TaskView from "../Views/TaskView";
import CreateTaskView from "../Views/CreateTaskView";
import LoginView from "../Views/LoginView";

const AppRoutes: any[] = [
	<Route key={2} path={"/createTask"} component={CreateTaskView} />,
	<Route key={1} path={"/login"} component={LoginView} />,
	<Route key={0} path={"/"} component={TaskView} />
];

export default AppRoutes;