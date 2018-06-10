import { reducer, actions } from '../reducer.js';

describe('ToDo reducers', () => {
    test('should produce correct state when task is added',  () => {
        expect(actions.ADD_TASK).toEqual('ADD_TASK');
    })
})

