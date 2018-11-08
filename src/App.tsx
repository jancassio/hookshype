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
    name: '',
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  handleNameChange = (event: any) => {
    const name = event.target.value.toLowerCase().replace(/\W/g, '');
    this.setState(() => ({ name }))
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Hype my lib with <span>React Hooks!</span></h1>
        <Input value={name} onChange={this.handleNameChange} />

        <div className={`center ${name.length > 2 ? 'show' : 'hide'}`}>
          <h2>Lib Name is <span>{name}Hooks</span></h2>
          <h2>The hook name is <span>use{captalize(name)}</span></h2>
          <h4>How to use that?</h4>
        </div>
        <Code name={name} />

        <div className="separator" />
        <footer>
          <p>Created by <b>Jan Cássio</b></p>
          <span>Checkout my networks:</span>
          <ul>
            <li><a href="http://jancassio.com/" target="_blank">Site</a></li>
            <li>•</li>
            <li><a href="https://github.com/jancassio/" target="_blank">Github</a></li>
            <li>•</li>
            <li><a href="https://stackoverflow.com/users/457569/jan-c%C3%A1ssio" target="_blank">Stack Overflow</a></li>
            <li>•</li>
            <li><a href="https://twitter.com/jancassio/" target="_blank">Twitter</a></li>
            <li>•</li>
            <li><a href="https://instagram.com/jancassio/" target="_blank">Instagram</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
