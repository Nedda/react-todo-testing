import React from 'react';
import ListItem, { ListWrapper } from '../index';
import { shallow, mount } from 'enzyme';

describe('ListItem', () => {
  it('should render a list item', () => {
    //given 
    const value = { task: 'new todo', completed: false };
    const component = mount(<ListItem listItem={value}/>);
    //when
    const itemValue = component.find(ListWrapper);
    //then
    expect(itemValue).toHaveLength(1);
    expect(itemValue.text()).toEqual(`${value.task}`);
  });

  it('should trigger corrent update function on Click', () => {
    //given 
    const value = { task: 'new todo', completed: false };
    const spy = jest.fn();
    const component = mount(<ListItem listItem={value}
                                      markItemDone={spy} />);
    //when
    const button = component.find('button');
    button.simulate('click');

    //then
  });
})
