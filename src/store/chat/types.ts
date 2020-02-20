//THIS FILE CONTAINS INTERFACES FOR API REQUEST RESPONSE AND ACTION CREATOR

//CHAT DETAIL BY DATE TYPE
export interface ChatByDate {
    visitors_with_conversation_count: number,
    visitors_affected_by_chat_count: number,
    visitors_autosuggested_count: number,
    visitors_with_chat_count: number,
    chats_from_autosuggest_count: number,
    chats_from_user_count: number,
    chats_from_visitor_count: number,
    conversation_count: number,
    user_message_count: number,
    visitor_message_count: number,
    missed_chat_count: number,
    date: string
}

//CHAT SUMMARY TYPE
export interface ChatSummary {
    room_id: string,
    start_date: string,
    end_date: string,
    total_visitors_with_conversation_count: number,
    total_visitors_affected_by_chat_count: number,
    total_visitors_autosuggested_count: number,
    total_visitors_with_chat_count: number,
    total_chats_from_autosuggest_count: number,
    total_chats_from_user_count: number,
    total_chats_from_visitor_count: number,
    total_conversation_count: number,
    total_user_message_count: number,
    total_visitor_message_count: number,
    total_missed_chat_count: number,
    by_date: ChatByDate[]
}

//Reducer State type
export interface ChatState {
    chatSummary: ChatSummary | null
}

export const FETCH_CHAT = "FETCH_CHAT";

export interface FetchChatAction {
    type: typeof FETCH_CHAT,
    payload: ChatSummary
}