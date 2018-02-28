import React from 'react'

const Option = ({ checked, label, name, onChange }) => (
  <div className="form-group">
    <label className="form-switch">
      <input
        checked={checked}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <i className="form-icon" />
      {label}
    </label>
  </div>
)

export default Option
