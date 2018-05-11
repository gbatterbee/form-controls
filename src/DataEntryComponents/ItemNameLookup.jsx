import React, { Component } from 'react';


// "BaseTypeName": "ItemNameLookup",
// "country": {
//     "nameValues": [
//         {
//             "name": {
//                 "id": 195,
//                 "value": "Land van oorsprong"
//             },
//             "value": {
//                 "id": 42,
//                 "value": "België",
//                 "code": "BE"
//             }
//         }
//     ],
//     "id": 23,
//     "name": "Land"
// },
const ItemNameLookup = (props) => {
  const id = props.parentId + '_' + props.name.id + 'ItemNameLookup';
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
export default ItemNameLookup;