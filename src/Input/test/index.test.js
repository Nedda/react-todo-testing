import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../index';

describe('Input', () => {
  test('should render an input form field', () => {
    //given
    const component = mount(<Input/>);

    //when
    const input = component.find('input')

    //then
    expect(input).toHaveLength(1);
  });

  test('should render with focus auto set', () => {
    //given
    const activeElementInDocument = document.activeElement;

    //when
    const component = mount(<Input/>);
    const input = component.instance().focusInput;

    //then
    // this test finds the current active element in the dom, 
    // then checks to see if its equal to the dom node our ref is assigned to
    expect(activeElementInDocument).toEqual(input.current)
  });

  test('should update the state when a value is given the the input field', () => {
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

  test('should not update the state if only white space is submitted', () => {
    const spy = jest.fn();
    const component = mount(<Input addToList={spy}/>)
    const input = component.find('input');
    const onEnterPress = { key: 'Enter' };
    const newTodo = '    ';
    const onChangeValue = { target: { value: newTodo } }

    //when
    input.simulate('change', onChangeValue);
    input.simulate('keyPress', onEnterPress);

    //then
    expect(component.state().value).toEqual(newTodo);
    expect(spy.mock.calls.length).toEqual(0)
  })

  test('should submit input value on Enter and clear input field', () => {
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

  test('checks that input in autofocused after new task is entered', () => {
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
    expect(document.activeElement).toEqual(component.instance().focusInput.current)
  });

})
