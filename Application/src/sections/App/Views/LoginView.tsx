import * as React from "react";
import Card from "../../../Components/Card";
import { Table } from "../../../Components/Table";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { BaseButtonProps, PublicButtonProps } from "../../../Components/Button/base";

type StateProps = {

};

type DispatchProps = {

};

type Props = StateProps & DispatchProps;

type State = {
	email: string;
	password: string;
};

class LoginView extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	login = () : void => {
		const payload = {
			email: this.state.email,
			password: this.state.password
		};

		console.log(payload);
	};

	_form_input_handler = (element): void => {
		let state = this.state;
		state[element.target.name] = element.target.value;
		console.log(state);
		this.setState(state);
	};

	footer = () => (
		<div onClick={() => this.login} className={"submit-button"}>
			<h3>Login</h3>
		</div>
	);

	render() {
		return (
			<div className="Section">
				<div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
					<Card footer={this.footer}>
						<form onSubmit={this.login} id={"loginForm"}>
							<div className={'formGroup'}>
								<p>Email: </p>
								<input name={'email'} onChange={this._form_input_handler} type="text" placeholder={'Email'} />
							</div>

							<div className={'formGroup'}>
								<p>Password: </p>
								<input name={"password"} onChange={this._form_input_handler} type="Password" placeholder={'Password'}/>
							</div>
						</form>

						<div className="Section">

						</div>
					</Card>
				</div>
			</div>
		);
	}

}

export default connect()(LoginView);
