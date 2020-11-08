import React from "react";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetService";

const HeadingWidget = (
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
                    {widget.name}
                    <button onClick={() => editWidget(widget)} className="pull-right">Edit</button>
                </span>
                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === 4 &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === 5 &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === 6 &&
                    <h6>{widget.text}</h6>
                }
            </div>
        }
        {
            widget.editing &&
            <div>

                <span>
                {widget.name}

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
                    text: event.target.value
                })} value={widget.text} className="form-control" placeholder="Heading Text"/>

                 <select onChange={(event) => updateWidget({
                     ...widget,
                     size: parseInt(event.target.value.charAt(event.target.value.length - 1))
                 })} className="form-control">
                     <option value="" disabled selected>Choose size</option>
                     <option>Heading 1</option>
                     <option>Heading 2</option>
                     <option>Heading 3</option>
                     <option>Heading 4</option>
                     <option>Heading 5</option>
                     <option>Heading 6</option>
                 </select>

                <input onChange={(event) => updateWidget({
                    ...widget,
                    name: event.target.value
                })} className="form-control" placeholder="Widget Name"/>
            </div>
        }


    </div>




export default HeadingWidget
