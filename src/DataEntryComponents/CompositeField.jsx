import React, { Component, PureComponent } from 'react';

const R = React.createElement;
export default class CompositeField extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        //this.props.attribute.value!=nextProps.attribute.value;
        // if (this.state && this.state.value == nextProps.value) {
        //     return false;
        // }
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
    }

    render() {
        console.log(this.props.field.value)
        const { typeMappings, field, onFieldChange, parentId } = this.props;
        const fieldType = field.type;
        const props = { ...field, parentId, typeMappings, onFieldChange: (field, value) => onFieldChange(field, value) };
        const title = field.name;
        let element = R(
            typeMappings[fieldType],
            props);
        return (
            <div style={{ marginBottom: '10px' }}>
                {element}
            </div>
        );
    }
}