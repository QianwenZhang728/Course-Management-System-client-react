import React from "react";
import {findCourseById} from "../services/CourseService";
import "../css/CourseEditorStyle.css";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";

export default class CourseEditorComponent extends React.Component {

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    componentDidMount() {
        console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course: actualCourse
            }))
    }

    render() {
        return(
            <div>
                <LessonTabsComponent title={this.state.course.title}/>

                <div className="container-fluid row">
                    <div className="col-4 modules">
                        <ModuleListComponent/>
                    </div>

                    <div className="col-8">
                        <TopicPillsComponent/>
                    </div>

                </div>
            </div>

        )
    }

}