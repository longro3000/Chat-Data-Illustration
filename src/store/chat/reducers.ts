import {
    ChatState,
    FETCH_CHAT,
    FetchChatAction
} from "./types";

const initialState: ChatState = {
    chatSummary: null
}

export default ( state: ChatState = initialState, action: FetchChatAction) => {
    switch (action.type) {
        case FETCH_CHAT: 
            return {...state, chatSummary: {...action.payload}};
        default:
            return state;
    }
}