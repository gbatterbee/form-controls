import React, { Component, PureComponent } from 'react';

// const fieldTypesx = {
//     string: <span>a string</span>,
//     Options: Options
// }

const R = React.createElement;
export default class Attribute extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        //return this.props.attribute.value!=nextProps.attribute.value;
        // if (this.state && this.state.value == nextProps.value) {
        //     return false;
        // }

        // this.setState({ value: nextProps.value })
        // return true;
        //return JSON.stringify(this.props.value) != JSON.stringify(newProps.value);
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
        console.log(this.props.attribute.value)
        const { config, attribute, onFieldChange,id } = this.props;
        const attributeType = attribute.type;
        const props = { ...attribute, config, id, onFieldChange: value => onFieldChange(this.props.id, value) };
        const title = attribute.name;
        let element = R(
            config.typeMappings[attributeType],
            props);
        return (
            <div style={{ marginBottom: '10px' }}>
                <h4>{title}</h4>
                {element}
            </div>
        );
    }
}

//className={{ data && data.errors && data.errors.length ? "error" : "" }}
//