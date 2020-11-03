import React from 'react'
import clsx from 'clsx'

function Radio(props) {
  const { name, items, inline, inputRef } = props
  const formCheckClasses = clsx('form-check', inline && 'form-check-inline')
  return (
    <div className="form-group">
      {items.map(([id, value, label]) => (
        <div className={formCheckClasses} key={id}>
          <input className="form-check-input" type="radio" value={value} name={name} id={id} ref={inputRef} />
          <label className="form-check-label" htmlFor={id}>{ label }</label>
        </div>
      ))}
    </div>
  )
}

export default Radio
