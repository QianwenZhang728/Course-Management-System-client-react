const initialState = {
    topics: []
}

export const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topic._id? action.topic : topic)
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC_FOR_LESSON":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ],
            }
        default:
            return state
    }
}

