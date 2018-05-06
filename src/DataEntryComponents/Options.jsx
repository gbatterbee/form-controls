import React, { Component, PureComponent } from 'react';
import CheckboxList from './CheckboxList';
import Lookup from './Lookup';
import AjaxLookup from './AjaxLookup';

// let itemStatements = {
//   id: 1,
//   description: "languages",
//   type: "options",
//   multi: true,
//   options: [{ id: 1, value="english" }]
// }

// // "ItemNameLookup - ref or ajax
// let ItemNameLookup = {
//   id: 1,
//   description: "languages",
//   type: "options",
//   multi: false,
//   options: [{ id: 1, value="english" }]
// }

// // "ItemNameLookup - ajax
// let typeahead = {
//   id: 1,
//   description: "languages",
//   type: "options",
//   multi: false,
//   options: { url: "/.../lookup" }
// }

const Options = (props) => {
  if (props.multi === true)
    return <CheckboxList {...props} />

  if (Array.isArray(options))
    return <Lookup id={fieldTypeId} description={description} options={options} />

    return <AjaxLookup id={fieldTypeId} description={description} options={options} />
}
export default Options;