import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Options from './DataEntryComponents/Options'
import Field from './DataEntryComponents/Field'
import { Z_DEFAULT_STRATEGY } from 'zlib';

const fieldTypes = {
  string: <span>a string</span>,
  Options: Options
}

const config = {
  fields: [
    {
      id: 1,
      title: "languages",
      type: "Options",
      multi: true,
      options: [{ value: 1, name: "english" },{ value: 2, name: "french" },{ value: 3, name: "chinese" }]
    },
    {
      id: 2,
      title: "Nutri-score",
      type: "Options",
      multi: false,
      options: [{ value: 1, name: "A" },{ value: 2, name: "B" },{ value: 3, name: "C" },{ value: 4, name: "D" }]
    },
    {
      id: 3,
      title: "Standardized Brand",
      type: "Options",
      multi: false,
      options: 'https://some.endpoint.com'
    }]
};


// ,
//   validation: [
//     { required: fieldId },
//     { min: 0, max: 100, fieldId },
//     { fieldId: [1], rules: [{ 'required': true }, { 'min': 1 }, { 'max', 1}] },
//     { fieldId: [1, 2], rules: ['<'] },
//   ]

// const error = { message, fieldId, comment, override }

class Validator {
  required() {

  }
  min() {

  }
  constructor(x) {
    this.rules = {
      required: this.required,
      min: this.min,
    }

  }

  validate(field, rules) {

  }
}
//     {rules["<"]}
const rules = { "<": "lessthan" };
class App extends Component {
  constructor() {
    super()
    this.rules = {
      required: this.required,
      min: this.min,
    }

  }

  render() {
    return (
      <div className="App">
   
        <Form
          fieldTypes={fieldTypes}
          initialValues={{}}
          schema={config}
        />
      </div>
    );
  }
}
class Form extends Component {

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return { values: nextProps.value };
  }

  constructor() {
    super();
    this.state = { fieldValues: {} };
  }

  onValueChanged = (id, value) => {
    const fieldValues = Object.assign({}, this.state.fieldValues, { [id]: value })
    this.setState({ fieldValues });
  }

  validate = (itemType, id, error) => {
    let state = this.state[id];
    if (!state) return;
    state.error = error;
    this.setState({ [id]: state });
  }

  render() {
    return (
      <form>
        {
          this.props.schema.fields.map(f => {
            var fieldValue = this.state.fieldValues[f.id];
            return (
              <Field
                key={f.id}
                fieldTypes={this.props.fieldTypes}
                fieldSchema={f}
                value={fieldValue || null}
                onFieldChange={(fieldId, value) => this.onValueChanged(fieldId, value)}
                onFieldBlur={(fieldId, value) => this.validate(f, fieldId, value)}
              />
            )
          }
          )
        }
      </form>
    )
  }
}

export default App;