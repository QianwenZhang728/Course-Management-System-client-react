import React from "react";
import {connect} from "react-redux";
import widgetReducer from "../reducers/wigetsReducer";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import topicService from "../services/TopicService";
import widgetService from "../services/WidgetService";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";


const WidgetListComponent = (
    {
        widgets=[],
        topicId,
        createWidget,
        deleteWidget,
        updateWidget,
        editWidget,
        okWidget,
        downWidget,
        upWidget
    }) =>
    <div>
        <ul>
            {
                widgets.map(widget =>
                    <li key={widget.id}>
                            {
                                widget.type === "Heading" &&
                                    <HeadingWidget widget={widget}
                                                   widgets={widgets}
                                                   deleteWidget= {deleteWidget}
                                                   editWidget={editWidget}
                                                   updateWidget={updateWidget}
                                                   okWidget={okWidget}
                                                   downWidget={downWidget}
                                                   upWidget={upWidget}/>
                            }
                            {
                                widget.type === "Paragraph" &&
                                    <ParagraphWidget  widget={widget}
                                                      widgets={widgets}
                                                      deleteWidget= {deleteWidget}
                                                      editWidget={editWidget}
                                                      updateWidget={updateWidget}
                                                      okWidget={okWidget}
                                                      downWidget={downWidget}
                                                      upWidget={upWidget}/>
                            }
                            {
                                widget.type === "List" &&
                                <ListWidget  widget={widget}
                                                  widgets={widgets}
                                                  deleteWidget= {deleteWidget}
                                                  editWidget={editWidget}
                                                  updateWidget={updateWidget}
                                                  okWidget={okWidget}
                                                  downWidget={downWidget}
                                                  upWidget={upWidget}/>
                            }
                        {
                            widget.type === "Image" &&
                            <ImageWidget  widget={widget}
                                         widgets={widgets}
                                         deleteWidget= {deleteWidget}
                                         editWidget={editWidget}
                                         updateWidget={updateWidget}
                                         okWidget={okWidget}
                                         downWidget={downWidget}
                                         upWidget={upWidget}/>
                        }
                    </li>
                )
            }
        </ul>
        <button onClick={() => createWidget(topicId)}>+</button>
    </div>

// container
const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId,
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widgetId) =>
        widgetService.deleteWidget(widgetId)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetId
            })),

    createWidget : (topicId) =>
        widgetService.createWidget(topicId, {name: "NEW HEADING", type: "Heading"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            })),

    updateWidget: (widget) => {
        debugger
        dispatch({
            type: "UPDATE_WIDGET",
            widget: widget
        })
    },

    editWidget: (widget) => dispatch({
        type: "UPDATE_WIDGET",
        widget: {...widget, editing: true}
    }),

    okWidget: (widget, widgets, topicId) => {
        dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets,
            topicId: topicId
        })
        dispatch({
            type: "UPDATE_WIDGET",
            widget: {...widget, editing: false, size:widget.size}})
        console.log(widgets)
        console.log(widget)
        widgetService.updateAll(widgets)
    },

    downWidget: (widget) => dispatch({
        type: "DOWN_WIDGET",
        widget
    }),

    upWidget: (widget) => dispatch({
        type: "UP_WIDGET",
        widget
    })

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(WidgetListComponent, HeadingWidget, ParagraphWidget, ListWidget, ImageWidget)