import React from 'react';
import ReactDOM from 'react-dom';
import App, { Button, ListItme } from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('finds the input type', () => {
    const component = mount(<App/>);
    expect(component.find('input').length).toEqual(1)
});

it('should update state in enter', () => {
    const component = mount(<App/>);
    const input = component.find('input');
    input.instance().value = "newThing";
    input.simulate('change');
    console.log(component.state);
})


