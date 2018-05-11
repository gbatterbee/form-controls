import React, { Fragment } from 'react';

// "country": {
//   "nameValues": [
//     {
//       "name": {
//         "id": 195,
//         "value": "Land van oorsprong"
//       },
//       "value": {
//         "id": 42,
//         "value": "België",
//         "code": "BE"
//       }
//     }
//   ],
//   "id": 23,
//   "name": "Land"
// }

const CompositeItemNameLookup = (props) => {
  return (
    <Fragment>
      {
        props.nameValues.map(v => <ItemNameLookup key={v.name.id} {...v} onChange={(field, value) => props.onFieldChange(getValue(props.nameValues, field, value))} />)
      }
    </Fragment>
  )
}

const getValue = (prevValue, field, value) => {
  let newValues = JSON.parse(JSON.stringify(prevValue));
  let itemToUpdate = newValues.find(v => v.name.id === field);
  itemToUpdate = Object.assign(itemToUpdate, {value});
  return { nameValues: newValues };
}

const ItemNameLookup = ({ name, options, value, onChange }) => (
  <div><select
    value={value.id}
    id={name.id}
    onChange={e => onChange(name.id, getSelected(options, e.target.value))}>
    {options.map(o =>
      <option
        key={o.id}
        value={o.id}>{o.value}
      </option>)}
  </select></div>
)

const getSelected = (options, value) => {
  return options.find(o => o.id == value);
}
export default CompositeItemNameLookup;
