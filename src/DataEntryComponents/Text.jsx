import React, { Component } from 'react';

// // ItemNameText - text
// let ItemNameText = {
//   id: 1,
//   description: "languages",
//   type: "string",
//   multiline: false,
// }


// // ItemMemo - text area
// let text = {
//   id: 1,
//   description: "languages",
//   type: "string",
//   multiline: true,
// }
// "ItemStatement - List checkboxes - equates toattribute with a selectable list
export default Text = (props) => {
  if (props.multiline)
    return <MultiLine {...props} />

  return <SingleLine {...props} />;
}

const SingleLine = (props) => {
  return (
    <span>
      <label htmlFor={props.id+'SingleLine'}>{props.title}</label>
      <input
        id={props.id+'SingleLine'}
        placeholder={props.title}
        type="text"
        value={props.value}
        onChange={e => props.onFieldChange(e.target.value)} />
    </span>
  )
}

const MultiLine = (props) => {
  return (
    <span>
      <label htmlFor={props.id+'MultiLine'}>{props.title}</label>
      <textarea
        id={props.id+'MultiLine'}
        style={{ width: "100%" }}
        placeholder={props.title}
        type="text"
        value={props.value}
        onChange={e => props.onFieldChange(e.target.value)} />
    </span>
  )
}
