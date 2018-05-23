import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles.css';
import * as R from 'ramda';
import Input from '../Input';
import ListItem from '../ListItem';
import ClearButton from '../ClearButton';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) { 
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(value) {
    this.props.updateState({ task: value, completed: false});
  }

  removeFromList() {
    this.props.removeCompletedTasks();
  }

  markItemDone(item) {
    this.props.updateTaskState(item.task);
  }

  render() {
    return (
      <div className="App">
        <Input
          addToList={this.addToList}
        />
        {R.map(x => <ListItem listItem={x} markItemDone={() => this.markItemDone(x)}/>, this.props.todoList)}
        <ClearButton 
          removeDoneItems={this.removeFromList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (payload) => dispatch({type: 'ADD_TASK', payload}),
  updateTaskState: (payload) => dispatch({type: 'COMPLETE_TASK', payload}),
  removeCompletedTasks: (payload) => dispatch({type: 'REMOVE_TASK', payload}),
});

  export default connect(mapStateToProps, mapDispatchToProps)(App);
