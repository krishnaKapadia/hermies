import * as React from 'react';
import { IStyle } from "fela";
import { applyModifiers } from "../../Utils/Fela/Modifiers";
import { createComponent } from "react-fela";
import { BaseEventProps } from "../index";

export enum BUTTON_TYPE {
	SUCCESS = "Success", DANGER = "Danger"
}

// export type BaseButtonProps = {
// 	type: BUTTON_TYPE,
// } & BaseEventProps<HTMLButtonElement>;

export type BaseButtonProps = {
	type: BUTTON_TYPE
};

export type PublicButtonProps = BaseEventProps<HTMLButtonElement>;

const StyledButton = (props: BaseButtonProps): IStyle => applyModifiers(
		[props.type === BUTTON_TYPE.SUCCESS, {
			color: '#5EDEBC',
			borderColor: '#5EDEBC'
		}]
)
({
	width: '80px',
	height: '40px',
	border: '2px solid',
	borderColor: '#5EDEBC',
	borderRadius: '5px',
	padding: '4px 8px',
	maxWidth: '40px',
	cursor: 'pointer'
});

const FelaButton = createComponent(StyledButton, 'span', props => Object.keys(props));

export class BaseButton extends React.Component<BaseButtonProps & PublicButtonProps & { children: any }> {

	render() {
		const { children, onClick, ...props } = this.props;

		return(
				<FelaButton onClick={onClick} { ...props }>
					{children}
				</FelaButton>
		);
	}
}