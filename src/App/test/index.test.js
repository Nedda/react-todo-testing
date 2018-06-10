import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer, actions } from '../reducer';
import App  from '../index.js';
import Input from '../../Input/';
import ListItem from '../../ListItem/';
import { mount } from 'enzyme';

describe('App', () => {
  let store;

  beforeEach(() => {
    const mappedReducer = combineReducers({
      todo: reducer
    })
    store = createStore(mappedReducer);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('finds the input component and field', () => {
    const component = mount(<App store={store}/>);
    expect(component.find('input').length).toEqual(1)
    expect(component.find(Input).length).toEqual(1)
  });

  test('should render new task when redux state is update',  () => {
    //given
    store.dispatch(actions.addTask('new todo'));
    const component = mount(<App store={store}/>);
    //then
    expect(component.find(ListItem).length).toEqual(1);
  });

  test('should render new task when redux state is update',  () => {
    //given
    store.dispatch(actions.addTask('new todo'));
    const component = mount(<App store={store}/>);
    //when
    store.dispatch(actions.addTask('new todo'));
    component.update();
    //then
    expect(component.find(ListItem).length).toEqual(2);
  });

})
