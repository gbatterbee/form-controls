import React, { Component } from 'react';
import ItemMemo from './ItemMemo'
import ItemNameText from './ItemNameText'
import Attribute from './Attribute'
import Composite from './Composite'
import CompositeItemNameLookup from './CompositeItemNameLookup'

const typeMappings = {
    Composite,
    CompositeItemNameLookup,
    ItemMemo,
    ItemNameText
    //ItemMemo:
    // ItemNameLookup:
    // ItemNameLookupCode:
    // ItemStatement:
    // ItemNameText:
    // ItemLongText:
    // ItemNameTextLookup:
  }

export default class Form extends Component {

    static getDerivedStateFromProps = (nextProps, prevState) => {
      const data = nextProps.data;
      const config = nextProps.config;
  
      const attributeKeys = Object.keys(data);
      let state = {};
      attributeKeys.forEach(k => {
        state[k] = Object.assign({}, data[k], config.attributes[k])
        if (state[k].type === "Composite" ) {
          state[k].values.forEach(value => {
            let id = value["name"].id;
            value = Object.assign(value, config.attributes[id]);
          })
        }

        if (state[k].type === "CompositeItemNameLookup") {
            state[k].nameValues.forEach(value => {
              let id = value["value"].id;
              value = Object.assign(value, config.attributes[id]);
            })
          }
      });
  
      // apply additional state logic - e.g. taggable fields
      return { attributes: state };
    }
  
    onValueChanged = (id, value) => {
      //    var attributes = Object.assign({}, this.state.attributes);
      //var attributes = { ...this.state.attributes };
      let attributes = JSON.parse(JSON.stringify(this.state.attributes));
      let newValue = {[id]:Object.assign(attributes[id],value)};
      attributes = Object.assign(attributes,newValue)
    //   if (id.constructor === String) {
    //     attributes[id].value = value;
    //   }
    //   else {
    //     var field = attributes[id.attribute][id.field];
    //     if (field.text)
    //       field.text
    //     else
    //       field.
    //   }
      this.setState({ attributes });
    }
  
    validate = (itemType, id, error) => {
      let state = this.state[id];
      if (!state) return;
      state.error = error;
      this.setState({ [id]: state });
    }
  
    render() {
      const { attributes } = this.state;
      const attributeKeys = Object.keys(attributes);
      return (
        <form>
          {
            attributeKeys.map(k => {
              return (
                <Attribute
                  key={k}
                  id={k}
                  config={Object.assign(this.props.config,{typeMappings})}
                  attribute={attributes[k]}
                  onFieldChange={(fieldId, value) => this.onValueChanged(fieldId, value)}
                  onFieldBlur={(fieldId, value) => this.validate(k, fieldId, value)}
                />
              )
            }
            )
          }
        </form>
      )
    }
  }
  