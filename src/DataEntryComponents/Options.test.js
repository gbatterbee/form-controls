import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { shallow } from 'enzyme';
import Options from './Options';

it('renders without crashing', () => {
  shallow(<Options />);
});
