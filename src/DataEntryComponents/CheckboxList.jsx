import React, { Component } from 'react';

export default class CheckboxList extends Component {

  toggleCheckbox = (option) => {
    const selectedOptions = this.props.value || [];
    if (selectedOptions.some(v => v.value === option.value)) {
      this.props.onFieldChange(selectedOptions.filter(v => v.value !== option.value));
      return;
    }

    this.props.onFieldChange([...selectedOptions, option]);
  }

  render() {
    const { id, options, value, onChange } = this.props;
    return (
      <span>
        {
          options.map(o => {
            const isChecked = value ? value.some(v => v.value === o.value) : false;
            const ctrlId = `${id}.${o.value}`;
            return (
              <span key={o.value}>
                <input
                  id={ctrlId}
                  type="checkbox"
                  value={o.value}
                  onChange={e => this.toggleCheckbox(o)}
                  checked={isChecked}
                />
                <label htmlFor={ctrlId}>{o.name}</label>
              </span>
            )
          })
        }
      </span>
    );
  }
}
