import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles.css';
import * as R from 'ramda';
import Input from '../Input';
import ListItem from '../ListItem';
import ClearButton from '../ClearButton';

export const Button = ({text, update}) => <div onClick={ () => update() }>{text}</div>

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      list: [],
      done: [],
    }
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(value) {
    this.setState({ list: R.append({ task: value, completed: false} , this.state.list) })
  }

  removeFromList() {
    this.setState({list: R.reject(x => R.equals(x.completed, true), this.state.list)})
  }

  markItemDone(item) {
    const newList = R.map(
             R.when(
               R.propEq('task', item.task), 
               R.assoc('completed', true)
             ), this.state.list);
    this.setState({list: newList})
  }

  render() {
    return (
      <div className="App">
        <Input
          addToList={this.addToList}
        />
        {console.log(this.state.list)}
        {R.map(x => <ListItem listItem={x} markItemDone={() => this.markItemDone(x)}/>, this.state.list)}
        <ClearButton 
            removeDoneItems={this.removeFromList}
        />
      </div>
    );
  }
}

export default App;
