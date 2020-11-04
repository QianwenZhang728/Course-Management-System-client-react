import widgetService from "../services/WidgetService";

const initialState = {
    widgets: [],
    move: function(from, to) {
        this.widgets.splice(to, 0, this.widgets.splice(from, 1)[0])}
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }

        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case "UPDATE_WIDGET":
            // console.log(state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget));
            return {
                ...state,
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "DOWN_WIDGET":
            let index = state.widgets.indexOf(action.widget)
            let order = action.widget.widgetOrder;
            state.widgets[index].widgetOrder = order + 1;
            state.widgets[index+1].widgetOrder = order;
            state.move(index, index + 1)
            console.log(state.widgets)
            return {
                ...state,
                widgets: [...state.widgets]
            }
        case "UP_WIDGET":
            let idx = state.widgets.indexOf(action.widget)
            let odr = action.widget.widgetOrder;
            state.widgets[idx].widgetOrder = odr - 1;
            state.widgets[idx - 1].widgetOrder = odr;
            state.move(idx, idx - 1)

            // console.log(state.widgets)
            return {
                ...state,
                widgets: [...state.widgets]
            }

        default:
            return state
    }
}

export default widgetReducer