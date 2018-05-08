import React, { Component, PureComponent } from 'react';

// let itemStatements = {
//   id: 1,
//   description: "languages",
//   type: "options",
//   multi: true,
//   options: [{ id: 1, value="english" }]
// }

// "ItemStatement - List checkboxes - equates toattribute with a selectable list
export default class AjaxLookup extends Component {
  constructor() {
    super();
    this.state = { selected: [] }
  }

  componentDidMount() {
  }

  render() {
   
    return (
      <span>
        AjaxLookup from {this.props.options}
      </span>
    );
  }
}
