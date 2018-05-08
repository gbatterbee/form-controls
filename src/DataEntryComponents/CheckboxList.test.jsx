import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { shallow } from 'enzyme';
import CheckboxList from './CheckboxList';

it('renders without crashing', () => {
  const sut = shallow(<CheckboxList
    fieldTypeId="1"
    description="hello from control"
    options={[{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]}
  />);

  expect(sut.find('input[type="checkbox"]')).toHaveLength(2);
});

it('sets value from props', () => {
  var sut = shallow(<CheckboxList
    fieldTypeId="1"
    description="hello from control"
    options={[{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]}
    value={[{ name: 'Abc', value: 1 }]}
  />)
  expect(sut.find('input[checked=true]')).toHaveLength(1);
});

it('propogates new selection state when checked', () => {
  var changeSpy=jest.fn();

  var sut = shallow(<CheckboxList
    fieldTypeId="1"
    description="hello from control"
    options={[{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]}
    value={[{ name: 'Abc', value: 1 }]}
    onChange={changeSpy}
  />);

  var input = sut.find('input[checked=true]');
  input.simulate('click');

  expect(changeSpy.mock.calls.length).toEqual(1);
  //expect(changeSpy.mock).toEqual([{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]);
});

it('raises changed event when a a box is unchecked', () => {
  shallow(<CheckboxList
    fieldTypeId="1"
    description="hello from control"
    options={[{ name: 'Abc', value: 1 }, { name: 'Abcd', value: 2 }]}
  />);
});

