import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles.css';
import * as R from 'ramda';
import Input from '../Input';
import ListItem from '../ListItem';
import ClearButton from '../ClearButton';
import { actions } from './reducer.js';
import { connect } from 'react-redux';

const mapIndex = R.addIndex(R.map);

class App extends Component {
  constructor(props) { 
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(value) {
    this.props.addTask(value);
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
        {mapIndex((item, index) => <ListItem key={index} listItem={item} markItemDone={() => this.markItemDone(item)}/>, this.props.todoList)}
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
  addTask: (payload) => dispatch(actions.addTask(payload)),
  updateTaskState: (payload) => dispatch(actions.completeTask(payload)),
  removeCompletedTasks: (payload) => dispatch(actions.clearCompletedTasks(payload)),
});

  export default connect(mapStateToProps, mapDispatchToProps)(App);
