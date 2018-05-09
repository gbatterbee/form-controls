import React, { Component } from 'react';

const R = React.createElement;

export default class CompositeField extends Component {

    shouldComponentUpdate(newProps) {
        return this.props.value!=newProps.value
        // return JSON.stringify(this.props.value) != JSON.stringify(newProps.value);
    }

    /*add has calc to state and props, to opimise, rather than stringify
    hashCode = function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
    }
    */
    render() {

        const { fieldTypes, fieldSchema, value, onFieldChange } = this.props;
        const fieldType = fieldSchema.type || "string";
        const props = { ...fieldSchema, fieldTypes, value, onFieldChange: value => onFieldChange(fieldSchema.id, value) };
        const title = fieldSchema.title;
        let element = R(
            fieldTypes[fieldType],
            props);
        return (
            <div style={{ marginBottom: '10px' }}>
                {element}
            </div>
        );
    }
}
