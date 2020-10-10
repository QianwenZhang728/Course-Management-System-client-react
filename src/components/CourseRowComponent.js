import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

const courseBeingEdited = false
const editCourse = () => {}

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course,
    }

    render() {
        return(
            <tr>
                <td>
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => {
                                const newTitle = event.target.value
                                this.setState(prevState => ({
                                    course: {...prevState.course, title: newTitle}
                                }))}
                            }
                            value={this.state.course.title}/>
                    }
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.props.course._id}`}>{this.state.course.title}</Link>
                    }
                </td>
                <td className="d-none d-sm-table-cell">{this.props.course.owner}</td>
                <td className="d-none d-md-table-cell">{this.props.course.modified}</td>
                <td>
                    <span className="float-right">
                        {
                            !this.state.editing &&
                            <span>
                                <a className="btn">
                                <i
                                    onClick={() => this.setState({editing: true})}
                                    className="fa fa-pencil">
                                </i>
                                </a>

                                <a className="btn">
                                <i
                                    onClick={() => this.props.deleteCourse(this.props.course)}
                                    className="fa fa-trash">
                                </i>
                                </a>
                            </span>

                        }
                        {
                            this.state.editing &&
                            <a className="btn">
                                <i
                                onClick={() => {
                                    updateCourse(this.state.course._id, this.state.course)
                                        .then(status => this.setState({editing: false}))
                                }}
                                className="fa fa-check">

                                </i>
                            </a>
                        }
                    </span>

                </td>
            </tr>
        )
    }
}
