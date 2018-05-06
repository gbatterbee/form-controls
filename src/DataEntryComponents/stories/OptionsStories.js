import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import Options from '../Options';


export const stories = storiesOf('Options', module)
  .add('shows Checkboxes for multi', () =>
    <Options 
    fieldTypeId="1" 
    description="hello from control" 
    multi={true} 
    options={[{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]} 
    value={[{ name: 'Abc', value: 1 }]}/>)

  .add('shows Dropdown for single', () =>
    <Options fieldTypeId="1" description="hello from control" multi={false} options={[]} />)

  .add('shows Dropdown for single search', () =>
    <Options fieldTypeId="1" description="hello from control" multi={false} options={{}} />);
