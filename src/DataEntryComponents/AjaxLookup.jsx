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
    // this.props.onChange([]);
  }

  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   return { selected: nextProps.value };
  // }

  // toggleCheckbox = (target) => {
  //   const filteredOut = this.state.selected.filter(i => i !== target.value);
  //   if (!target.checked)
  //     return this.props.onChange([...filteredOut]);

  //   this.props.onChange([...filteredOut, target.value]);
  // }

  render() {
    // let { itemTypeId, options, value, onChange } = this.props;
    // const { values } = schema;
    return (
      <span>
        AjaxLookup
        {/* {options.map(o =>
          <span key={o.id}>
            <input
              type="checkbox"
              value={value[o.id]}
              onChange={e => this.toggleCheckbox(o.id)}
              checked={this.state[o.id]} />
            <label htmlFor={o.id}>{o.value}</label>
          </span>)
        } */}
      </span>
    );
  }
}
