import React, { Component } from 'react';
import Child from './Components/Child';

import { FluxoProvider } from './Context';

export class App extends Component {
  state = { 
    step: 0,
    dados: {}
  };

  handleContextStep = step => this.setState({ step });
  handleContextData = data => {
      const defaultData = this.state.dados;
      console.log(data);

      this.setState({ dados: {...defaultData, ...data} });
  };

  render() {
      const contextValue = {
          step: this.state.step,
          handleContextStep: this.handleContextStep,
          dados: this.state.dados,
          handleContextData: this.handleContextData,
      };


      return (
          <FluxoProvider value={contextValue}>
            <Child/>
          </FluxoProvider>
      );
  }
}

export default App;
