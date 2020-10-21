import React from "react";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import topicService from "../services/TopicService";
import {Link} from "react-router-dom";

const TopicPillsComponent = (
    {
        course,
        moduleId,
        lessonId,
        topics=[],
        createTopicForLesson,
        deleteTopic,
        updateTopic,
        ok,
        edit,
        selectedTopicId,
        selectTopic
    }) =>
        <div className="topics">
            <ul className="nav nav-pills wbdv-topic-pill-list">
                {
                    topics.map(topic =>
                        <li key={topic._id}
                            className={topic._id === selectedTopicId? "nav-item selected nav-link" : "nav-item wbdv-topic-pill nav-link"}>
                            {/*<a className="nav-link">*/}
                                {
                                    !topic.editing &&
                                    <span>
                                        <Link to={`/course/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                              onClick={() => selectTopic(topic._id)} className="link">
                                            {topic.title}
                                        </Link>

                                        <i onClick={() => edit(topic)} className="fa fa-pencil btn pull-right"></i>
                                    </span>
                                }
                                {
                                    topic.editing &&
                                    <span>
                                        <input
                                            onChange={(event) => updateTopic({
                                                ...topic,
                                                title: event.target.value
                                            })}
                                            value={topic.title}/>

                                        <i onClick={() => deleteTopic(topic._id)} className="fa fa-times btn pull-right wbdv-module-item-delete-btn"></i>
                                        <i onClick={() => ok(topic)} className="fa fa-check btn pull-right wbdv-module-item-delete-btn"></i>

                                        {/*<i onClick={() => deleteLesson(lesson._id)} className="fa fa-times btn pull-right wbdv-module-item-delete-btn"></i>*/}
                                        {/*<i onClick={() => updateLesson({...lesson, editing: false})} className="fa fa-check btn pull-right wbdv-module-item-delete-btn"></i>*/}
                                    </span>
                                }
                            {/*</a>*/}
                        </li>
                    )
                }
                <li className="nav-link">
                    <i onClick={() => createTopicForLesson(lessonId)} className="fa fa-plus btn pull-right" style={{color: "#006a71"}}></i>
                </li>
            </ul>

        </div>


const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course,
    selectedTopicId: state.topicReducer.selectedTopicId
})

const dispatchToPropertyMapper = (dispatch) => ({
    updateTopic: (newTopic) =>
        dispatch({
            type: "UPDATE_TOPIC",
            topic: newTopic}),

    ok: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
            type: "UPDATE_TOPIC",
            topic: {...topic, editing: false}
        })),

    edit: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: true
        }).then(status => {
            dispatch({
                type: "UPDATE_TOPIC",
                topic: {...topic, editing: true}
            })}),

    deleteTopic: (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId
            })),
    createTopicForLesson: (lessonId) => {
        topicService.createTopicForLesson(
            lessonId, {
                title: "New Topic"
            })
            .then(actualTopic => dispatch({
                type: "CREATE_TOPIC_FOR_LESSON",
                topic: actualTopic
            }))
    },
    selectTopic: (topicId) =>
        dispatch({
            type: "SELECT_TOPIC",
            topicId: topicId
        })

})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)




