import React from "react";

const ImageWidget = (
    {
        widget,
        widgets,
        topicId,
        editWidget,
        deleteWidget,
        updateWidget,
        okWidget,
        downWidget,
        upWidget
    }) =>
    <div>
        {
            !widget.editing &&
            <div>
                <span>
                    <b>{widget.name}</b>
                    <button onClick={() => editWidget(widget)} className="pull-right">Edit</button>
                </span>
                <br/>
                <img src={widget.url} width="500" height="300"/>
            </div>
        }
        {
            widget.editing &&
            <div>

                <span>
                <b>{widget.name}</b>

                <i onClick={() => deleteWidget(widget.id)} className="btn btn-danger wbdb-widget-delete-btn fa fa-trash pull-right"></i>

                <select onChange={(event) => updateWidget({
                    ...widget,
                    type: event.target.value
                })} value={widget.type} className="select-type pull-right">
                    <option value="Heading">Heading</option>
                    <option value="Paragraph">Paragraph</option>
                    <option value="List">List</option>
                    <option value="Image">Image</option>
                </select>

                    {widget.widgetOrder !== widgets.length - 1 &&
                    <i onClick={() => downWidget(widget)} className="btn btn-warning wbdb-widget-position-down fa fa-arrow-down pull-right"></i>
                    }
                    {widget.widgetOrder !== 0 &&
                    <i onClick={() => upWidget(widget)} className="btn btn-warning wbdb-widget-position-up fa fa-arrow-up fa-sm pull-right"></i>
                    }
                    <i onClick={() => okWidget(widget, widgets, topicId)} className="fa fa-check btn pull-right wbdv-module-item-delete-btn"></i>
                <i onClick={() => updateWidget({
                    ...widget,
                    editing: false
                })} className="fa fa-toggle-off btn pull-right"></i>
                </span>

                <input onChange={(event) => updateWidget({
                    ...widget,
                    url: event.target.value
                })} className="form-control" placeholder="Image URL"/>

                <input onChange={(event) => updateWidget({
                    ...widget,
                    name: event.target.value
                })} className="form-control" placeholder="Widget Name"/>

                {/*Preview*/}
                <h4>Preview</h4>
                <img src={widget.url} width="500" height="300"/>
            </div>
        }


    </div>

export default ImageWidget
