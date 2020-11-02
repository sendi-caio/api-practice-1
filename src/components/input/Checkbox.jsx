import React from 'react'

function Checkbox(props) {
  const { id, label, name, inputRef } = props
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={name} id={id} ref={inputRef} />
      <label className="form-check-label" htmlFor={id}>
        { label }
      </label>
    </div>
  )
}

export default Checkbox
