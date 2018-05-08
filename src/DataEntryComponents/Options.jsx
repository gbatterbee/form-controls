import React, { Component, PureComponent } from 'react';
import CheckboxList from './CheckboxList';
import Lookup from './Lookup';
import AjaxLookup from './AjaxLookup';

const Options = (props) => {
  if (props.multi === true)
    return <CheckboxList {...props} />

  if (Array.isArray(props.options))
    return <Lookup {...props} />
  
    return <AjaxLookup {...props} />
}
export default Options;
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
