import React, { Component } from "react";
import Prism from 'prismjs';

import 'prismjs/themes/prism-solarizedlight.css';
import "./App.css";

export const captalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

interface Props {

}

interface State {
  name: string;
}

class App extends Component<Props, State> {

  state = {
    name: 'mingau',
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  handleNameChange = (event: any) => {
    const name = event.target.value;
    this.setState(() => ({ name }))
  }

  render() {
    const { name } = this.state;
    const captalizedName = captalize(name);

    return (
      <div className="App">
        <label htmlFor="name">
          <span>Name:</span>
          <input type="text" name="name" value={name} onChange={this.handleNameChange} />
        </label>

        <h2>Lib Name is {name}Hooks</h2>
        <h2>The hook name is use{captalizedName}</h2>

        <h4>How to use that?</h4>

        <code className="language-javascript">{`
          import React from 'react';
          import { use${captalizedName} } from '${name}Hooks';

          function Component(props) {
            const [ state, setState ] = use${captalizedName}(props.value);
            return (
              <>
                <div>
                  <button onClick={setState}>Hype Me</button>
                  <h4>Value changed to {state}</h4>
                </div>
                <span>Now I'm ${name}Hooks hyped as well</span>
              </>
            );
          }
        `}</code>
      </div>
    );
  }
}

export default App;
