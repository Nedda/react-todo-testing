import * as R from 'ramda';

export const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return R.append(action.payload, state)
    case 'COMPLETE_TASK':
      return R.map(
               R.when(R.propEq('task', action.payload),
                      R.assoc('completed', true))
              , state);
    case 'REMOVE_TASK':
      return R.reject(x => R.equals(x.completed, true), state)
    default: 
      return state;
  }
}
