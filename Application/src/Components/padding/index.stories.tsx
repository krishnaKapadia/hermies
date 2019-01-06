import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Padding from "./index";
import { Provider as FelaProvider } from "react-fela";
import { createRenderer } from "fela";
import { withKnobs, number } from '@storybook/addon-knobs';

storiesOf('Padding Component', module)
.addDecorator(withKnobs)
.addDecorator((story => <div style={{ textAlign: 'center' }}>{story()}</div>))
.add('Default', () => {
    const renderer = createRenderer();
    const top = number('Top', 20);
    console.log(`Top: ${top}`);

    return(
        <FelaProvider renderer={renderer}>
            <Padding top={`${top}px`}>
                <h1>Test</h1>
            </Padding>
        </FelaProvider>
    );
});