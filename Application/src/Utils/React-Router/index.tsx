import * as React from 'react';
import * as H from 'history';
import { Switch } from "react-router";
import { Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "connected-react-router";

// App wide history object
export const History = createBrowserHistory();

type RouterProps = {
	history: H.History;
	routes: Route[];
};

export const Router: React.FunctionComponent<RouterProps> = ({ history, routes }) => (
		<ConnectedRouter history={history}>
				<Switch>
								{...routes}
				</Switch>
		</ConnectedRouter>
);

