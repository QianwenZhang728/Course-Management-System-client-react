import React from "react";
import "../../css/WidgetStyle.css";

const ListWidget = (
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
            {console.log(widget.style)}
        {

            !widget.editing &&
            <div>
                <span>
                    <b>{widget.name}</b>
                    <button onClick={() => editWidget(widget)} className="pull-right">Edit</button>
                </span>
                    {
                            widget.style === "Unordered list" &&
                            <ul>
                                    {widget.text.split('\n').map(row =>
                                        <li>
                                                {row}
                                        </li>
                                    )}
                            </ul>
                    }
                    {
                            widget.style === "Ordered list" &&
                            <ol>
                                    {widget.text.split('\n').map(row =>
                                        <li>
                                                {row}
                                        </li>
                                    )}
                            </ol>
                    }
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

                <textarea onChange={(event) => updateWidget({
                    ...widget,
                    text: event.target.value
                })} value={widget.text} className="form-control" cols="30" rows="10" placeholder="Paragraph Text"></textarea>

                <select onChange={(event) => updateWidget({
                        ...widget,
                        style: event.target.value
                })} value={widget.style} className="select-type form-control">
                {/*<option value="" disabled selected></option>*/}
                <option value="Unordered list">Unordered list</option>
                <option value="Ordered list">Ordered list</option>
                </select>

                <input onChange={(event) => updateWidget({
                    ...widget,
                    name: event.target.value
                })} className="form-control" placeholder="Widget Name"/>

                {/*Preview*/}
                <h4>Preview</h4>
                    {
                            widget.style === "Unordered list" &&
                            <ul>
                                    {widget.text.split('\n').map(row =>
                                        <li>
                                                {row}
                                        </li>
                                    )}
                            </ul>
                    }
                    {
                            widget.style === "Ordered list" &&
                            <ol>
                                    {widget.text.split('\n').map(row =>
                                        <li>
                                                {row}
                                        </li>
                                    )}
                            </ol>
                    }

            </div>
        }


    </div>

export default ListWidget
