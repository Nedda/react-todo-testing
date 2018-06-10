import { reducer, actions } from '../reducer.js';


describe('ToDo reducers', () => {
  test('should produce correct state when task is added',  () => {
    //given 
    const defaultState = [];

    //when
    const addTask = actions.addTask('new task')
    const updatedTaskList = reducer(defaultState, addTask)

    //then
    const expectedState = [{ task: 'new task', completed: false}];
    expect(updatedTaskList).toEqual(expectedState);
  });

  test('should produce correct state when task is completed',  () => {
    //given 
    const defaultState = [
      {task: 'first task', completed: false}, 
      {task: 'second task', completed: false}]; 

    //when
    const completedTask = actions.completeTask('first task')
    const updatedTaskList = reducer(defaultState, completedTask)

    //then
    const expectedState = [
      {task: 'first task', completed: true}, 
      {task: 'second task', completed: false}];
    expect(updatedTaskList).toEqual(expectedState);
  });

  test("if task is already completed, it doesn't toggle it",  () => {
    //given 
    const defaultState = [
      {task: 'first task', completed: true}, 
      {task: 'second task', completed: false}];

    //when
    const completedTask = actions.completeTask('first task')
    const updatedTaskList = reducer(defaultState, completedTask)

    //then
    const expectedState = [
      {task: 'first task', completed: true}, 
      {task: 'second task', completed: false}];
    expect(updatedTaskList).toEqual(expectedState);
  });

  test('clear all task that are completed', () => {
    //given 
    const defaultState = [
      {task: 'first task', completed: true}, 
      {task: 'second task', completed: true}, 
      {task: 'third task', completed: false}];

    //when
    const completedTask = actions.clearCompletedTasks()
    const updatedTaskList = reducer(defaultState, completedTask)

    //then
    const expectedState = [{task: 'third task', completed: false}];
    expect(updatedTaskList).toEqual(expectedState);
  });
});

