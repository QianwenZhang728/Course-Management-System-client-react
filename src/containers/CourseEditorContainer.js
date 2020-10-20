import React from "react";
import "../css/CourseEditorStyle.css";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "./WidgetListContainer";
import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService";
import topicService from "../services/TopicService";
import LessonTabsComponent from "../components/LessonTabsComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";

class CourseEditorContainer extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)

            if(lessonId) {
                console.log("in if lessonId")
                this.props.findTopicsForLesson(lessonId)
            }
        }

    }

    // if moduleId changes, findLessonsForModule again for this selected module.
    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }

        if(lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(moduleId)
        }
    }

    render() {
        return(
            <div>
                {console.log(this.props)}
                <LessonTabsComponent path={{str: this.props.history.location.pathname}}/>

                <div className="container-fluid row">
                    <div className="col-4 modules">
                        <ModuleListComponent/>
                    </div>

                    <div className="col-8">
                        <TopicPillsComponent/>
                        <WidgetListContainer/>
                    </div>
                </div>
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    // to courseReducer
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    // to moduleReducer
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    // to lessonReducer
    findLessonsForModule: (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons,
                moduleId
            })),
    // to topicReducer
    findTopicsForLesson: (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(topics =>
            {
                console.log(lessonId)
                dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics,
                    lessonId
                })
            }

                )
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)
