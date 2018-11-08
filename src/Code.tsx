import React from 'react'

import { captalize } from './helpers';

import './Code.css';

interface Props {
  name: string;
}

const template = ({ name }: Props) => (`
import React from 'react';
import { use${captalize(name)} } from '${name}Hooks';

function Component(props) {
  const [ state, setState ] = use${captalize(name)}(props.value);
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
`)

export default function Code({ name }: Props) {
  return (
    <div className={`Code center ${name.length > 2 ? 'show' : 'hide'}`}>
      <pre className="language-javascript">
        <code className="language-javascript">
          { template({ name }) }
        </code>
      </pre>
    </div>
  );
}