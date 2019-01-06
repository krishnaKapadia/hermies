import { IStyle } from "fela";
import { createComponent } from "react-fela";
import * as React from "react";
import { History } from "../../Utils/React-Router";

export type BaseNavProps = {
};

// const StyledButton = (props: BaseNavProps): IStyle => (
//
// );

// const FelaNav = createComponent(StyledButton, 'span', props => Object.keys(props));

export const NavigationBar: React.FunctionComponent<BaseNavProps> = ({  children, ...props}) => {
	return(
		<div className="Nav">
			<ul className="Left">
				<h1 onClick={() => History.push('/')}>Hermes</h1>
			</ul>

			<ul className="Right">
				{/*<NavLink to={"/createTask"}>1</NavLink>*/}
				<li onClick={() => History.push('/login')}>Login</li>
				<li onClick={() => History.push('/register')}>Sign up</li>
			</ul>
		</div>
	);
};
