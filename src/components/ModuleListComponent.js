import React from "react";
import "../css/CourseEditorStyle.css";

const ModuleListComponent = () => {
    return (
        <nav className="nav nav-pills flex-column wbdv-module-list">
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 1 - JQuery<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 2 - React<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 3 - Redux<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 4 - Native<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 5 - Angular<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 6 - Node<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="#" className="nav-item nav-link wbdv-module-item wbdv-module-item-title">
                Module 7 - Mongo<i className="fa fa-times pull-right wbdv-module-item-delete-btn"></i>
            </a>
            <a href="" className="btn">
                <i className="fa fa-plus wbdv-module-item-add-btn pull-right"></i>
            </a>
        </nav>
    )

}

export default ModuleListComponent;
