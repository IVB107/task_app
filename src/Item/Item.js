import React from 'react'

const itemStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '300px',
  padding: '0px 10px',
  margin: '12px',
  fontSize: '16px'
}

const flexRow = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const button = {
  margin: '6px',
  padding: '0px',
  cursor: 'pointer'
}

const editInput = {
  margin: '12px',
  padding: '4px',
  fontSize: '14px',
  border: 'none'
}

const Item = (props) => {
  let title = null

  if (props.isEditingTitle === false) {
    title = (
      <p id='taskName' onClick={props.edit}>{props.name}</p>
    )
  } else {
    title = (
      <div>
        <input style={editInput} type='text' value={props.name} onChange={props.change} onKeyDown={props.update} />
      </div>
    )
  }
  return (
    <div style={itemStyle}>
      <div>
        <input type='checkbox' style={button} checked={props.checked} onChange={props.complete} />
      </div>
      <div id='itemContainer' style={boxStyle} className={props.priority}>
        <div id='nameContainer' style={flexRow}>
          {title}
        </div>
        <select id='select' name='Priority' value={props.priority} onChange={props.changePriority}>
          <option disabled>Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div>
        <button title='remove' style={button} onClick={props.delete}>X</button>
      </div>
    </div>
  )
}

export default Item
