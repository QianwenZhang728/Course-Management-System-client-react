import React, {useLayoutEffect} from "react";
import CourseRowComponent from "./CourseCardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseCardComponent from "./CourseCardComponent";
import "../css/CourseManagerContainerStyle.css";
import {Link} from "react-router-dom";

class CourseGridComponent extends React.Component {

    state = {
        // courses: [],
        courseBeingEdited: {}
    }

    render() {
        return (
            <div className="container-fluid course-list-container">
                <nav bg="light" className="navbar courseTable-nav fixed-top justify-content-between">
                    <i className="fa fa-align-justify fa-2x wbdv-hamburger" style={{paddingLeft: 10}}></i>
                    <div className="div-course-manager d-none d-md-block">
                        <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                    </div>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2 wbdv-field wbdv-new-course" type="text"
                               placeholder="New Course Title"
                               value={this.state.value} onChange={this.props.handleChange}
                        />
                        <a href="" className="btn">
                            <i type="submit" value="Submit"
                               onClick={this.props.handleSubmit}
                               className="fa fa-2x fa-plus-circle wbdv-button wbdv-add-course">
                            </i>
                        </a>

                    </form>
                </nav>

                <div className="row grid-header">
                    <div className="col-4">
                        <h5>Recent documents</h5>
                    </div>
                    <div className="col-4" style={{border: "none"}}>
                        <select className="custom-select" defaultValue="Owned by me">
                            <option >Owned by me</option></select>
                    </div>
                    <div className="col-4 icons" >
                        <Link to={`/table`} className="link">
                            <a className="btn"
                               onClick={this.props.handleView}
                            ><i className="fa fa-list wbdv-button wbdv-list-layout"></i></a>
                        </Link>

                        <a className="btn"><i
                            className="fa fa-sort-alpha-asc wbdv-header wbdv-sort"></i></a>
                        <a className="btn"><i
                            className="fa fa-folder"></i></a>
                    </div>
                </div>

                <div className="row">
                {
                    this.props.courses.map(item =>
                        <CourseCardComponent
                            deleteCourse={this.props.deleteCourse}
                            course={item}
                            key={item._id}/>
                    )
                }
                </div>

            </div>

        );
    }
}


export default CourseGridComponent