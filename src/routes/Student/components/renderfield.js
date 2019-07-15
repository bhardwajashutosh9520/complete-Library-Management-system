import React from 'react'

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className='form-control' {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default RenderField;