import React, { useState } from 'react';
import './index.scss'

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {

  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)


  const handleOnEdit = () => {
    setOnEdit(true)
  }

  const handleSave = id => {
    setOnEdit(false)
    if (editValue) {
      handleEditTodos(editValue, id)
    } else {
      setEditValue(todo.name)
    }
  }

  if (onEdit) {
    return (
      <li className="item__edition">
        <input type="text" id="editValue" value={editValue} name="editValue"
          onChange={e => setEditValue(e.target.value.toLowerCase())} />
        <button className="item__edition-button"onClick={() => handleSave(id)}>Save</button>
      </li>
    )

  } else {
    return (
      <li className="item__listing">
        <label htmlFor={id} className={todo.complete ? "active" : ""} >
        <input type="checkbox" id={id} checked={todo.complete}
          onChange={() => checkComplete(id)} />
        <p className="item__listing-name" >{todo.name}</p>
        </label>
        <button className="item__listing-button" disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
      </li>
    )
  }
}