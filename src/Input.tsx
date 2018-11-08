import React from 'react'

import './Input.css';

interface Props {
  value: string;
  onChange: (event: any) => void;
}

export default function Input({ value, onChange }: Props) {
  return (
    <label className="Input" htmlFor="name">
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="What's the name?"
      />
    </label>
  )
}