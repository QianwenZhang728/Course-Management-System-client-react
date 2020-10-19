import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseEditorComponent from "../components/CourseEditorComponent";
import "font-awesome/css/font-awesome.css";
import {findAllCourses, udpateCourse, deleteCourse, createCourse} from "../services/CourseService";
import "../css/CourseManagerContainerStyle.css";
import CourseGridComponent from "../components/CourseGridComponent";

export class CourseManagerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '',
                      courses : [],
                      tableView: true,
        };

        // this.name = {value: ''};
        // this.addedName = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleView = this.handleView.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // debugger;
        this.addCourse(event);
        this.setState({value: ''});
        // debugger;
        event.preventDefault(); // without this, new course won't be added into courses
    }

    handleView(event) {
        this.setState({tableView: !this.state.tableView});
        console.log(this.state.tableView)
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    addCourse = (event) => {
        // this.setAddedName(name);
        // this.state.addedName = this.state.name;
        console.log(this.state.value);
        console.log(this.props);
        // console.log(this.state.addedName);
        const newCourse = {
            title: this.state.value,
            owner: "me",
            modified: (new Date()).toDateString()
        }
        console.log(newCourse);

        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState =>({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            );
            console.log(this.state.courses)
            }

            )
    }

    editCourse = (course) => {
        this.setState({
            courseBeingEdited: course
        })
    }


    render() {
        return (
            <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                <BrowserRouter>

                    <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                        <Route path="/" exact>

                            <nav bg="light" className="navbar courseTable-nav fixed-top justify-content-between">
                                <i className="fa fa-align-justify fa-2x wbdv-hamburger" style={{paddingLeft: 10}}></i>
                                <div className="div-course-manager d-none d-md-block">
                                    <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
                                </div>

                                <form className="form-inline">
                                    <input className="form-control mr-sm-2 wbdv-field wbdv-new-course" type="text"
                                           placeholder="New Course Title"
                                        // onChange={(event) => {
                                        //     this.state.name = event.target.value;
                                        //     console.log(this.state.name);
                                        // this.setName(event.target.value);
                                        // this.setState(prevState => ({
                                        //     course: {...prevState.course, title: newTitle}
                                        // }))
                                        // }}
                                           value={this.state.value} onChange={this.handleChange}
                                        // value={this.state.name}
                                    />
                                    <a href="" className="btn">
                                        <i type="submit" value="Submit"
                                            // onClick={(event) => {this.addCourse()}}
                                           onClick={this.handleSubmit}
                                           className="fa fa-2x fa-plus-circle wbdv-button wbdv-add-course">
                                        </i>
                                    </a>

                                </form>
                            </nav>
                            {
                                this.state.tableView &&
                                <CourseTableComponent courses={this.state.courses} deleteCourse={this.deleteCourse} handleView={this.handleView}/>
                            }
                            {
                                !this.state.tableView &&
                                <CourseGridComponent courses={this.state.courses} deleteCourse={this.deleteCourse} handleView={this.handleView}/>
                            }

                        </Route>

                        <Route path="/edit/:courseId" exact component={CourseEditorComponent}></Route>

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}