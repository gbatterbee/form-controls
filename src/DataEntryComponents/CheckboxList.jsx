import React, { Component } from 'react';

export default class CheckboxList extends Component {
  static getDerivedStateFromProps(nextProps) {
    return { selected: nextProps.value };
  }

  constructor() {
    super();
    //  this.state = { selected: [] };
  }

  componentDidMount() {
    // this.props.onChange([]);
  }

  toggleCheckbox = (target) => {
    // const filteredOut = this.state.selected.filter(i => i !== target.value);
    // if (!target.checked)
    //   return this.props.onChange([...filteredOut]);

    // this.props.onChange([...filteredOut, target.value]);
  }

  render() {
    const {
      options, value, onChange,
    } = this.props;
    return (
      <span>
        {options.map(o => {
          const isChecked=value.findIndex(v => v.value === o.value) > -1;
          return (
            <span key={o.value}>
              <input
                id={o.value}
                type="checkbox"
                value={o.value}
                onChange={onChange}
                checked={isChecked}
              />
              <label htmlFor={o.value}>{o.name}</label>
            </span>
          )
        })
        }
      </span>
    );
  }
}
