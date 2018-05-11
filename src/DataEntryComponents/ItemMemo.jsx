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
// export default ItemNameText = (props) => {
//   if (props.multiline)
//     return <MultiLine {...props} />

//   return <SingleLineText {...props} />;
// }

const ItemMemo = (props) => {
  return (
    <span>
      <label htmlFor={props.id + 'ItemMemo'}>{props.name}</label>
      <input
        id={props.id + 'ItemMemo'}
        placeholder={props.title}
        type="text"
        value={props.value || props.text}
        style={{ width: "100%" }}
        onChange={e => props.onFieldChange({ value: e.target.value })} />
    </span>
  )
}
export default ItemMemo;
