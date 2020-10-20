import React from "react";

const WidgetListComponent = ({widgets=[], createWidget, deleteWidget, updateWidget, editWidget, okWidget}) =>
    <div>
        <h1>Widgets</h1>
        <ul>
            {
                widgets.map(widget =>
                <li key={widget._id}>
                    <button onClick={() => deleteWidget(widget)}>Delete</button>
                    {
                        widget.editing &&
                        <span>
                            <input onChange={(event) => updateWidget({
                                ...widget,
                                name: event.target.value
                            })} value={widget.name}/>
                            <button onClick={() => okWidget(widget)}>OK</button>
                        </span>

                    }
                    {
                        !widget.editing &&
                            <span>
                                {widget.name}
                                <button onClick={() => editWidget(widget)}>Edit</button>
                            </span>
                    }
                </li>
                )
            }
        </ul>
        <button onClick={createWidget}>+</button>
    </div>

export default WidgetListComponent