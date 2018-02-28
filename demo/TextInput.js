import React from 'react'

const TextInput = ({ label, name, onChange, placeholder, value }) => (
  <div className="form-group">
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    <input
      className="form-input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </div>
)

export default TextInput
