import * as R from 'ramda';

const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const CLEAR_COMPLETE_TASKS = 'CLEAR_COMPLETE_TASKS';

export const addTask = payload => ({
  type: ADD_TASK, 
  payload
})

export const completeTask = payload => ({
  type: COMPLETE_TASK, 
  payload
})

export const clearCompletedTasks = () => ({
  type: CLEAR_COMPLETE_TASKS, 
})

export const actions = {
  addTask,
  completeTask,
  clearCompletedTasks
};

export const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TASK:
      return R.append({ task: action.payload, completed: false} , state)
    case COMPLETE_TASK:
      return R.map(
        R.when(R.propEq('task', action.payload),
               R.assoc('completed', true))
              , state);
    case CLEAR_COMPLETE_TASKS:
      return R.reject(x => R.equals(x.completed, true), state)
    default: 
      return state;
  }
}
