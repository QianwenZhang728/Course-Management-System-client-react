import React, {useLayoutEffect} from "react";
import CourseRowComponent from "./CourseCardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseCardComponent from "./CourseCardComponent";
import "../css/CourseManagerContainerStyle.css";

class CourseGridComponent extends React.Component {

    state = {
        // courses: [],
        courseBeingEdited: {}
    }

    render() {
        return (
            <div className="container-fluid course-list-container">
                <div className="row grid-header">
                    <div className="col-4">
                        <h5>Recent documents</h5>
                    </div>
                    <div className="col-4" style={{border: "none"}}>
                        <select className="custom-select" defaultValue="Owned by me">
                            <option >Owned by me</option></select>
                    </div>
                    <div className="col-4 icons" >
                        <a className="btn"
                            onClick={this.props.handleView}
                        ><i className="fa fa-list wbdv-button wbdv-list-layout"></i></a>
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