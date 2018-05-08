import React, { Component } from 'react';

import Options from './Options'
const fieldTypesx = {
    string: <span>a string</span>,
    Options: Options
}

const R = React.createElement;
const Field = ({ fieldTypes, fieldSchema, value, onFieldChange }) => {
    const fieldType = fieldSchema.type || "string";
    const props = { ...fieldSchema, value, onFieldChange: value => onFieldChange(fieldSchema.id, value) };
    const title = fieldSchema.title;
    let element = R(
        fieldTypes[fieldType],
        props);
    return (
        <div style={{ marginBottom: '10px' }}>
            <h4>{title}</h4>
            {element}
        </div>
    );
}

export default Field;

//className={{ data && data.errors && data.errors.length ? "error" : "" }}
//