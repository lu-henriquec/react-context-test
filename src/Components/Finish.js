import React from 'react';

import { FluxoConsumer } from '../Context';

export default function Finish() {
  return (
    <FluxoConsumer>
        {({ dados, handleContextStep }) => (
            <div>
                <p>Nome: {dados.name}</p>
                <p>Sexo: {dados.sexo}</p>
                <hr/>
                <button onClick={() => handleContextStep(0)}>Reiniciar</button>
            </div>
        )}
    </FluxoConsumer>
  );
}
