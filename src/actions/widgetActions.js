// import widgetService from "../services/WidgetService"
// import topicService from "../services/TopicService";
//
// export const DELETE_WIDGET = "DELETE_WIDGET"
// export const CREATE_WIDGET = "CREATE_WIDGET"
// export const UPDATE_WIDGET = "UPDATE_WIDGET"
//
// export const editWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: true}})
//
// export const okWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget: {...widget, editing: false}})
//
// export const updateWidget = (dispatch, widget) =>
//     dispatch({type: UPDATE_WIDGET, widget})
//
// export const deleteWidget = (dispatch, widget) =>
//     dispatch({type: DELETE_WIDGET, widget})
//
// export const createWidget = (dispatch, topicId) =>
//     widgetService.createWidget(topicId, {name: "NEW HEADING", type: "HEADING"})
//         .then(widget => dispatch({
//             type: "CREATE_WIDGET",
//             widget
//         }))