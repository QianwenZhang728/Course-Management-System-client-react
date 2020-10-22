import React from "react";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";

const LessonTabs = (
    {
        course,
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        ok,
        edit,
        selectedLessonId,
        selectLesson
    }) =>
    <nav className="navbar navbar-expand-md">
        <div className="col-4 navbar-brand-combination">
            {/*<i onClick={() => window.history.go(-1)} className="fa fa-times btn wbdv-course-editor wbdv-close"></i>*/}
            <Link to={"/table"} className="link">
                <i className="fa fa-times btn wbdv-course-editor wbdv-close"></i>
            </Link>

            {/*<a href="#" className="wbdv-course-editor wbdv-close">*/}
            {/*    <i className="fa fa-times"></i>*/}
            {/*</a>*/}
            <div className="navbar-brand wbdv-course-title">
                {course.title}
            </div>
        </div>

        <div className="col-8">
            <button type="button" className="navbar-toggler" data-toggle="collapse"
                    data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav lessons">
                    <ul className="nav nav-pills nav-fill lessons">
                        {
                            lessons.map(lesson =>
                                <li key={lesson._id}
                                className={lesson._id === selectedLessonId? "nav-item selected" : "nav-item"}>
                                    {/*<a className="nav-link">*/}
                                        {
                                            !lesson.editing &&
                                            <span>
                                                <Link to={`/course/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                                                      onClick={() => selectLesson(lesson)} className="link">
                                                    {lesson.title}
                                                </Link>
                                                <i onClick={() => edit(lesson)} className="fa fa-pencil btn pull-right"></i>
                                            </span>
                                        }
                                        {
                                            lesson.editing &&
                                            <span>
                                                <input
                                                    onChange={(event) => updateLesson({
                                                        ...lesson,
                                                        title: event.target.value
                                                    })}
                                                    value={lesson.title}/>

                                                <i onClick={() => deleteLesson(lesson._id)} className="fa fa-times btn pull-right"></i>
                                                <i onClick={() => ok(lesson)} className="fa fa-check btn pull-right"></i>

                                            </span>
                                        }
                                    {/*</a>*/}
                                </li>
                            )
                        }
                    </ul>
                </div>

                {/*<a href="" className="btn" >*/}
                    <i onClick={() => createLessonForModule(moduleId)} className="fa fa-plus btn wbdv-lesson-add-btn"></i>
                {/*</a>*/}

            </div>
        </div>

    </nav>


const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course,
    selectedLessonId: state.lessonReducer.selectedLessonId
})

const dispatchToPropertyMapper = (dispatch) => ({
    updateLesson: (newLesson) =>
        dispatch({
             type: "UPDATE_LESSON",
             lesson: newLesson}),

    ok: (lesson) =>
    {
        // debugger
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: false
        }).then(status =>
        {
            console.log(lesson)
            // debugger
            dispatch({
                type: "UPDATE_LESSON",
                lesson: {...lesson, editing: false}
            })
        })
    },


    edit: (lesson) =>
        lessonService.updateLesson(lesson._id, {
            ...lesson, editing: true
        }).then(status => {
            dispatch({
            type: "UPDATE_LESSON",
            lesson: {...lesson, editing: true}
        })}),

    // updateLesson: (newLesson) =>
    //     lessonService.updateLesson(newLesson)
    //         .then(actualLesson => {
    //             console.log(newLesson.editing);
    //             dispatch({
    //             type: "UPDATE_LESSON",
    //             lesson: actualLesson
    //         })}),
    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),

    createLessonForModule: (moduleId) =>
    {
        // console.log(moduleId)
        // debugger
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson =>
            {
                // console.log(actualLesson)
                // debugger
                dispatch({
                    type: "CREATE_LESSON_FOR_MODULE",
                    lesson: actualLesson
                })
            })

    },

    selectLesson: (lesson) =>
        dispatch({
            type: "SELECT_LESSON",
            lessonId: lesson._id
        })


//     createLessonForModule: (moduleId) =>
//         lessonService.createLessonForModule(
//             moduleId, {
//                 title: "New Lesson"
//             })
//             .then(actualLesson => dispatch({
//                 type: "CREATE_LESSON_FOR_MODULE",
//                 lesson: actualLesson
//             }))
//
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabs)

