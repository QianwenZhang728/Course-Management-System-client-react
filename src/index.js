import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import widgetsReducer from "./reducers/wigetsReducer";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer";
import {CourseManagerComponent} from "./components/CourseManagerComponent";

const reducers = combineReducers({
    widgetsReducer, moduleReducer, courseReducer, lessonReducer, topicReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <CourseManagerComponent/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
