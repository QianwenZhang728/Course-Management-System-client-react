import React from "react";
import "../css/CourseEditorStyle.css";

const TopicPillsComponent = () => {
    return (
        <div className="topics">
            <ul className="nav nav-pills wbdv-topic-pill-list">
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#">Topic 1</a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link active" href="#">Topic 2</a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#">Topic 3</a>
                </li>
                <li className="nav-item wbdv-topic-pill">
                    <a className="nav-link" href="#">Topic 4</a>
                </li>
                <li>
                    <a href="" className="btn">
                        <i className="fa fa-plus wbdv-topic-add-btn"></i>
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default TopicPillsComponent;
