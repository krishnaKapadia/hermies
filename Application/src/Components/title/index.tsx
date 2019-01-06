import React from 'react';

type SuppliedProps = {
    children: any;
}

type Props = SuppliedProps;

export const Title: React.FunctionComponent<Props> = ({ children, ...props}) => {
    return(
        <h1>{ children }</h1>
    );
};