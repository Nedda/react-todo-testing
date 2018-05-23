import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './App';
import { reducer } from './App/reducer';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const mappedReducer = combineReducers({
    todo: reducer
})

const store = createStore(mappedReducer, 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const renderedComponent = <Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(renderedComponent, document.getElementById('root'));
registerServiceWorker();
