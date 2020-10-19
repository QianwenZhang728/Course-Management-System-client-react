import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CourseManagerContainer} from "./containers/CourseManagerContainer";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import widgetsReducer from "./reducers/wigetsReducer";


const reducers = combineReducers({
    widgetsReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <CourseManagerContainer/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
