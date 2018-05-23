import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { reducer } from './App/reducer';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, 
                          ['do stuff'], 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
