// const TOPIC_URL = "http://localhost:8080/api/topics";
// const WIDGET_URL = "http://localhost:8080/api/widgets";
const TOPIC_URL = "https://cs5610-fall-qwzhang-java.herokuapp.com/api/topics";
const WIDGET_URL = "https://cs5610-fall-qwzhang-java.herokuapp.com/api/widgets";


const findAllWidgets = () =>
    fetch(WIDGET_URL, {
    }).then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

const createWidget = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json",
            // "Access-Control-Allow-Origin" : "http://localhost:3000"
        }
    }).then(response => response.json())

const deleteWidget = widgetId =>
    fetch(`${WIDGET_URL}/${widgetId}`,{
        method: "DELETE"
    })
        // .then(response => response.json())

const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

const updateAll = (newWidgets) => {
    let i;
    // console.log(newWidgets)
    for (i = 0; i < newWidgets.length; i++) {
        fetch(`${WIDGET_URL}/${newWidgets[i].id}`, {
            method: "PUT",
            body: JSON.stringify(newWidgets[i]),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
}



export default {
    findAllWidgets,
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget,
    updateAll
}
