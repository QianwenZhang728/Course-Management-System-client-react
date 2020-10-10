import React from "react";
import "../css/CourseEditorStyle.css";

const LessonTabsComponent = (props) => {
        return (
            <nav className="navbar navbar-expand-md">
                <div className="col-4 navbar-brand-combination">
                    <a href="#" className="wbdv-course-editor wbdv-close">
                        <i className="fa fa-times"></i>
                    </a>
                    <div className="navbar-brand wbdv-course-title">
                        {props.title}
                    </div>
                </div>

                <div className="col-8">
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Build</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Theme</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Stores</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Apps</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-lesson-tabs" href="#">Settings</a>
                                </li>
                            </ul>
                        </div>

                        <a href="" className="btn">
                            <i className="fa fa-plus wbdv-lesson-add-btn"></i>
                        </a>
                    </div>
                </div>

            </nav>
        )

}

export default LessonTabsComponent;
