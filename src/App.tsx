import React, { PureComponent } from "react";
import Prism from 'prismjs';

import { captalize } from './helpers';

import Code from './Code';
import Input from './Input';

import 'prismjs/themes/prism-solarizedlight.css';
import "./App.css";

interface Props {

}

interface State {
  name: string;
}

class App extends PureComponent<Props, State> {

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
    const name = event.target.value.toLowerCase();
    this.setState(() => ({ name }))
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <Input value={name} onChange={this.handleNameChange} />

        <h2>Lib Name is {name}Hooks</h2>
        <h2>The hook name is use{captalize(name)}</h2>

        <h4>How to use that?</h4>

        <Code name={name} />
      </div>
    );
  }
}

export default App;
