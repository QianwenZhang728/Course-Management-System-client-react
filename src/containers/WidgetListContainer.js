import React from "react";
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from "react-redux";
import {createWidget, deleteWidget, editWidget, updateWidget, okWidget} from "../actions/widgetActions";
import widgetReducer from "../reducers/wigetsReducer";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(WidgetListComponent)

