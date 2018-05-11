import React, { Component } from 'react';

//{
  //                             "name": {
  //                                 "id": 1997,
  //                                 "value": "Functional Name"
  //                             },
  //                             "text": "Muesli Crunchy Mixed Cereals"
  //                         },
const ItemNameText = (props) => {
  const id = props.parentId + '_' + props.name.id + '_ItemNameText';
  return (
    <span>
      <label htmlFor={id}>{props.name.value}</label>
      <input
        id={id}
        placeholder={props.name.value}
        type="text"
        value={props.text}
        style={{ width: "100%" }}
        onChange={e => props.onFieldChange(props.name.id,{text:e.target.value})} />
    </span>
  )
}
export default ItemNameText;