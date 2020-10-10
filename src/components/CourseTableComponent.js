import React, {useLayoutEffect} from "react";
import CourseRowComponent from "./CourseRowComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

class CourseTableComponent extends React.Component {

    state = {
        // courses: [],
        courseBeingEdited: {}
    }

    render() {
        return (
            <div>
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
                                <a className="btn"
                                    onClick={this.props.handleView}
                                ><i className="fa fa-th wbdv-button wbdv-grid-layout"></i></a>
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