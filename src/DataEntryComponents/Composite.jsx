import React, { Fragment } from 'react';
import CompositeField from './CompositeField'

// "BaseTypeName": "ItemNameText",
// "descriptionBreakdown": {
//                     "values": [
//                         {
//                             "name": {
//                                 "id": 1997,
//                                 "value": "Functional Name"
//                             },
//                             "text": "Muesli Crunchy Mixed Cereals"
//                         },
//                         {
//                             "name": {
//                                 "id": 1998,
//                                 "value": "Variant"
//                             },
//                             "text": "With Dried Apple & Raisins"
//                         }
//                     ],
//                     "id": 184,
//                     "name": "Description Breakdown"
//                 },

const Composite = (props) => {
 const fieldKeys = Object.keys(props.values);
  return (
    <Fragment>
      {
        fieldKeys.map(k => 
            <CompositeField
              key={k}
              parentId={props.id}
              field={props.values[k]}
              typeMappings={props.config.typeMappings}
              onFieldChange={(field, value) => props.onFieldChange(getValue(props.values,field,value)) }
            />
        )
      }
    </Fragment>
  )
}

const getValue = (prevValue, field, value) => {
  let newValues = JSON.parse(JSON.stringify(prevValue));
  let itemToUpdate=newValues.find(v=>v.name.id===field);
  itemToUpdate=Object.assign(itemToUpdate,value);
  return {values:newValues};
}

export default Composite;
