import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../index';

describe('Input', () => {
  it('should render an input form field', () => {
    //given
    const component = shallow(<Input/>);

    //when
    const input = component.find('input')

    //then
    expect(input).toHaveLength(1);
  });

  it('should update the state when a value is given the the input field', () => {
    //given
    const spy = jest.fn();
    const component = mount(<Input addToList={spy}/>)
    const input = component.find('input');
    const newTodo = 'new todo';
    const onChangeValue = { target: { value: newTodo } }

    //when
    input.simulate('change', onChangeValue);

    //then
    expect(component.state().value).toEqual(newTodo);
  });

  it('should submit input value on Enter and clear input field', () => {
    //given
    const spy = jest.fn();
    const component = mount(<Input addToList={spy}/>)
    const input = component.find('input');
    const newTodo = 'new todo';
    const onChangeValue = { target: { value: newTodo } }
    const onEnterPress = { key: 'Enter' };

    //when
    input.simulate('change', onChangeValue);
    input.simulate('keyPress', onEnterPress);

    //then
    expect(spy.mock.calls).toEqual([[newTodo]])
    expect(component.state().value).toEqual('');
  });

  it('should have focus assigned to it automatically', () => {
    //given
    const component = mount(<Input/>)
    const input = component.find('input');
    expect(input.is('input:focus')).toBe(true);

  })
})
