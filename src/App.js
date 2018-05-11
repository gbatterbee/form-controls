import React, { Component } from 'react';

import Form from './DataEntryComponents/Form';
// import ItemNameText from './DataEntryComponents/SingleLineText'
// import Attribute from './DataEntryComponents/Attribute'
// import Composite from './DataEntryComponents/Composite'

var temp = {
  "standardisedBrand": {
    "nameValues": [
      {
        "name": {
          "id": 224,
          "value": "Merk"
        },
        "value": {
          "id": 572,
          "value": "Asda"
        }
      }
    ],
    "id": 33,
    "name": "Standaard merk"
  },
  "weight": {
    "values": [
      {
        "name": {
          "id": 227,
          "value": "Brutogewicht"
        },
        "text": "573"
      }
    ],
    "id": 34,
    "name": "Gewicht"
  },
  "languagesOnPack": {
    "values": [
      {
        "id": 994,
        "value": "Croatian"
      },
      {
        "id": 999,
        "value": "Nederlands"
      },
      {
        "id": 1001,
        "value": "Engels"
      },
      {
        "id": 1015,
        "value": "Duits"
      },
      {
        "id": 1017,
        "value": "Grieks, Modern (1453-)"
      },
      {
        "id": 1028,
        "value": "Hongaars"
      },
      {
        "id": 1117,
        "value": "Russisch"
      },
      {
        "id": 1134,
        "value": "Spaans"
      }
    ],
    "id": 83,
    "name": "Talen op de verpakking"
  },
  "unitMerchandising": {
    "values": [
      {
        "name": {
          "id": 1778,
          "value": "Hoogte"
        },
        "text": "212"
      },
      {
        "name": {
          "id": 1779,
          "value": "Breedte"
        },
        "text": "192"
      },
      {
        "name": {
          "id": 1780,
          "value": "Diepte"
        },
        "text": "54"
      }
    ],
    "id": 134,
    "name": "Eenheidmerchandising"
  },
  "newProductDevelopment": {
    "nameValues": [
      {
        "name": {
          "id": 1818,
          "value": "Nieuwe productontwikkeling"
        },
        "value": {
          "id": 22875,
          "value": "3. Final artwork, visibly empty/dummy contents"
        }
      }
    ],
    "id": 137,
    "name": "Nieuwe productontwikkeling"
  },
  "additionalCategory": {
    "nameValues": [
      {
        "name": {
          "id": 1991,
          "value": "Rijpheid van Nederlandse kaas"
        },
        "value": {
          "id": 37801,
          "value": "Jonge kaas"
        }
      },
      {
        "name": {
          "id": 1992,
          "value": "Smaak van buitenlandse kaas"
        },
        "value": {
          "id": 37815,
          "value": "Buitenlands Gorgonzola, Blauwader"
        }
      },
      {
        "name": {
          "id": 1993,
          "value": "Type koffie"
        },
        "value": {
          "id": 37820,
          "value": "Bonen en espresso"
        }
      },
      {
        "name": {
          "id": 1994,
          "value": "Type thee"
        },
        "value": {
          "id": 37829,
          "value": "Zwarte thee voor 1 kopje"
        }
      },
      {
        "name": {
          "id": 1995,
          "value": "Type ei"
        },
        "value": {
          "id": 37836,
          "value": "Biologisch"
        }
      },
      {
        "name": {
          "id": 1996,
          "value": "Type ijs"
        },
        "value": {
          "id": 37839,
          "value": "Minis"
        }
      }
    ],
    "id": 183,
    "name": "Overige categorie"
  }
};

var data = {
  "regulatedProductName": {
    "value": "Krokante muesli met gedroogde appel & rozijnen & voor bian supt",
    "mimeType": "text/plain",
    "id": 159,
    "name": "Voorgeschreven naam product"
  },
  "dimension": {
    "values": [
      {
        "name": {
          "id": 183,
          "value": "Schaphoogte"
        },
        "text": "192"
      },
      {
        "name": {
          "id": 184,
          "value": "Schapbreedte"
        },
        "text": "192"
      },
      {
        "name": {
          "id": 185,
          "value": "Schapdiepte"
        },
        "text": "54"
      }
    ],
    "id": 16,
    "name": "Afmeting"
  },
  "country": {
    "nameValues": [
      {
        "name": {
          "id": 195,
          "value": "Land van oorsprong"
        },
        "value": {
          "id": 42,
          "value": "België",
          "code": "BE"
        }
      }
    ],
    "id": 23,
    "name": "Land"
  }
};

const config = {
  attributes: {
    "regulatedProductName": {
      type: "ItemMemo"
    },
    "dimension": {
      type: "Composite",
    },
    "country": {
      type: "CompositeItemNameLookup",
    },
    183: { type: "ItemNameText" },
    184: { type: "ItemNameText" },
    185: { type: "ItemNameText" },
    195: { type: "ItemNameLookup" },
    42: { type: "ItemNameLookup",options:[{id:2,value:'btest', "code": "BT"},{id:42,value:'België',code:'BE'}] }
  }
};

class Validator {
  required() {

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
    this.state = { count: 0 }
  }
  update() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        {/* <Test value={this.state.count} />
        <button onClick={() => this.update()} /> */}
        <Form
          data={data}
          config={config}
        />
      </div>
    );
  }
}

// class Test extends Component {
//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log("getDerivedStateFromProps")
//     var state = Object.assign({}, prevState, nextProps);
//     console.log(state);
//     return state;
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate")
//     console.log(this.props)
//     console.log(nextProps)
//     console.log(this.state)
//     console.log(nextState)
//     return true;
//   }
//   render(){
//     return <div>Hello {this.state.value}</div>
//   }
// }


export default App;