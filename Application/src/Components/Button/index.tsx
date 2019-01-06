import * as React from 'react';
import { BaseButton, BaseButtonProps, BUTTON_TYPE, PublicButtonProps } from "./base";

type DefaultProps = BaseButtonProps;

type SuccessButtonProps = PublicButtonProps;
export const SuccessButton: React.FunctionComponent<SuccessButtonProps> = (props) => {
	const defaultProps: DefaultProps = {
			type: BUTTON_TYPE.SUCCESS
	};

	return (
			<BaseButton {...props} {...defaultProps }>
				{props.children}
			</BaseButton>
	);
};

type DangerButtonProps = PublicButtonProps;
export const DangerButton: React.FunctionComponent<DangerButtonProps> = (props) => {
	const defaultProps: DefaultProps = {
		type: BUTTON_TYPE.DANGER
	};

	return (
			<BaseButton {...props} {...defaultProps }>
				{props.children}
			</BaseButton>
	);
};