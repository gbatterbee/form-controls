import React, { Component } from 'react';

export default class Lookup extends Component {

  toggleCheckbox = (option) => {
    const selectedOptions = this.props.value || [];
    if (selectedOptions.some(v => v.value === option.value)) {
      this.props.onFieldChange(selectedOptions.filter(v => v.value !== option.value));
      return;
    }

    this.props.onFieldChange([...selectedOptions, option]);
  }

  render() {
    const { id, options, title, value, onFieldChange } = this.props;
    return (
      <span>
        <label htmlFor={id}>{title}</label>
        
        <select id={id}  onChange={e => onFieldChange(e.target.value)}>
          {
            options.map(o => {
              return (
                <option key={o.value} value={o.value}>{o.name}</option>
              )
            })
          }
        </select>
      </span>
    );
  }
}
