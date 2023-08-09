/* eslint-disable react/prop-types */
import React from 'react'

export default function Input({ label, value, onChange, type, keys, disabled }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id="firstname"
          value={value}
          onChange={(param) => onChange({ [keys]: param.target.value })}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
