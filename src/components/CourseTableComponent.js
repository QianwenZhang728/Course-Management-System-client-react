import React, {useLayoutEffect} from "react";
import CourseRowComponent from "./CourseRowComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";

class CourseTableComponent extends React.Component {

    state = {
        // courses: [],
        courseBeingEdited: {}
    }

    render() {
        return (
            <div>
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
                                // onClick={(event) => {this.addCourse()}}
                               onClick={this.props.handleSubmit}
                               className="fa fa-2x fa-plus-circle wbdv-button wbdv-add-course">
                            </i>
                        </a>

                    </form>
                </nav>

                <div className="container-fluid course-list-container">
                    <Table className="table table-hover table-lg">
                        <thead>
                        <tr>
                            <th className="wbdv-header wbdv-title">Title</th>
                            <th className="d-none d-sm-table-cell wbdv-header wbdv-owner">Owned by</th>
                            <th className="d-none d-md-table-cell wbdv-header wbdv-last-modified">Last
                                modified
                            </th>
                            <th className="icons">
                                <Link to={`/grid`} className="link">
                                    <a className="btn"
                                       onClick={this.props.handleView}
                                    ><i className="fa fa-th wbdv-button wbdv-grid-layout"></i></a>
                                </Link>
                                <a className="btn"><i
                                    className="fa fa-sort-alpha-asc wbdv-header wbdv-sort"></i></a>
                            </th>
                        </tr>
                        </thead>

                        <tbody className="table-body">
                                {
                                    this.props.courses.map(item =>
                                        <CourseRowComponent
                                            deleteCourse={this.props.deleteCourse}
                                            course={item}
                                            key={item._id}/>
                                    )
                                }

                        </tbody>


                    </Table>

                </div>
            </div>

        );
    }
}


export default CourseTableComponent