import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

const courseBeingEdited = false
const editCourse = () => {}

export default class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xm-12" >
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>

                <div className="card-body row">
                    <div className="col-9">
                        <h5 className="card-title">
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
                        </h5>
                        <p className="card-text">Modified {this.props.course.modified}</p>
                    </div>

                    <div className="col-3">
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
                    </div>

                </div>
            </div>
        )
    }
}
