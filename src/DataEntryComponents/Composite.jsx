import React, { Fragment } from 'react';
import CompositeField from './CompositeField'

const Composite = (props) => {
  var initialValue = props.value || {};
  return (
    <Fragment>
      {
        props.fields.map(f => {
          return (
            <CompositeField
              key={f.id}
              onFieldChange={(field, value) => props.onFieldChange(getValue(initialValue,f.id, value))   }
              fieldTypes={props.fieldTypes}
              value={initialValue[f.id]}
              fieldSchema={f}
            />
          )
        })
      }
    </Fragment>
  )
}

const getValue = (prevValue, field, value) =>{
  return Object.assign({},prevValue, { [field]: value })
}

export default Composite;
