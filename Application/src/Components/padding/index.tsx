import {IStyle} from "fela";
import React, { Component } from "react";
import {createComponent} from "react-fela";

type SuppliedProps = {
    top?: string;
    bottom?: string;
    left? : string;
    right?: string;
}

type Props = SuppliedProps;

const StyledTitle = (props: Props) : IStyle => ({
    paddingTop: props.top,
    paddingBottom: props.bottom,
    paddingLeft: props.left,
    paddingRight: props.right,
});

export const PaddingContainer = createComponent(StyledTitle, 'div');

export default class Padding extends Component<Props> {

    public render() {
        const { children, ...props } = this.props;
        console.log(this.props);
        return(
            <PaddingContainer top={this.props.top}>
                { children }
            </PaddingContainer>
        )
    }
}
