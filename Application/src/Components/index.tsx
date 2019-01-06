import React from 'react';

export type BaseEventProps<TElement extends HTMLElement> = {
	onBlur?: React.FocusEventHandler<TElement>;
	onFocus?: React.FocusEventHandler<TElement>;

	onKeyUp?: React.KeyboardEventHandler<TElement>;
	onKeyDown?: React.KeyboardEventHandler<TElement>;
	onKeyPress?: React.KeyboardEventHandler<TElement>;

	onTouchEnd?: React.TouchEventHandler<TElement>;
	onTouchMove?: React.TouchEventHandler<TElement>;
	onTouchStart?: React.TouchEventHandler<TElement>;

	onClick?: React.MouseEventHandler<TElement>;
	onMouseUp?: React.MouseEventHandler<TElement>;
	onMouseDown?: React.MouseEventHandler<TElement>;
	onMouseEnter?: React.MouseEventHandler<TElement>;
	onMouseLeave?: React.MouseEventHandler<TElement>;
};

export const BaseEventNames = [
	'onClick',
	'onMouseUp',
	'onMouseDown',
	'onMouseEnter',
	'onMouseLeave',
	'onKeyUp',
	'onKeyDown',
	'onKeyPress',
	'onFocus',
	'onBlur',
	'onTouchEnd',
	'onTouchMove',
	'onTouchStart',
];