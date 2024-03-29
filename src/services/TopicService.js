const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/qwzhang/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/qwzhang/topics"


export const findTopicsForLesson = (LessonId) =>
    fetch(`${lessonUrl}/${LessonId}/topics`)
        .then(response => response.json())

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateTopic = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const deleteTopic = topicId =>
    fetch(`${topicUrl}/${topicId}`,{
        method: "DELETE"
    }).then(response => response.json())


export default {
   findTopicsForLesson,
    updateTopic,
    createTopicForLesson,
    deleteTopic
}