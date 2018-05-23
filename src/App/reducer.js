import * as R from 'ramda';

export const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return R.append({ task: action.task,
                            completed: action.state }
                            , state)
        default: 
            return state;
    }
}
