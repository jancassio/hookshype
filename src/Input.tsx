import React from 'react'

interface Props {
  value: string;
  onChange: (event: any) => void;
}

export default function Input({ value, onChange }: Props) {
  return (
    <label htmlFor="name">
      <span>Name:</span>
      <input type="text" name="name" value={value} onChange={onChange} />
    </label>
  )
}