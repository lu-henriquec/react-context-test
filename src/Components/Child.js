import React from 'react';

import Name from './Name';
import Sexo from './Sexo';
import Launch from './Launch';
import Finish from './Finish';

import { FluxoConsumer } from '../Context';

const Child = props => (
    <FluxoConsumer>
        {({ step }) => {
            switch (step) {
                case 1:
                    return <Name />;
                case 2:
                    return <Sexo />;
                case 3:
                    return <Finish />;
                default:
                    return <Launch />;
            }
        }}
    </FluxoConsumer>
);

export default Child;