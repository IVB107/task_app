import React from 'react'

const buttonStyle = {
  cursor: 'pointer'
}
const inputContainer = {
  margin: '12px'
}

const Input = (props) => {
  return (
    <div style={inputContainer}>
      <input className='inputStyle' type='text' value={props.name} onChange={props.change} onKeyDown={props.enter} />
      <button id='addItem' type='submit' style={buttonStyle} onClick={props.add}>Add</button>
    </div>
  )
}

export default Input
