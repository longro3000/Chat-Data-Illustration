import axios from 'axios';
import { Dispatch } from 'react';

import {
    FetchChatAction,
    ChatState,
    FETCH_CHAT
} from './types';

import { Form } from '../form/types';

export const fetchChat = (form: Form) => async (dispatch: Dispatch<FetchChatAction>, getState: () => ChatState) =>  {
    try { 
        const { startDate, endDate, accessToken } = form;

        const api = axios.create({
            baseURL: 'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily',
            headers: {
                'Authorization': accessToken
            }
        });

        const response = await api.get(`/?start_date=${startDate}&end_date=${endDate}`);

        dispatch({
            type: FETCH_CHAT,
            payload: response.data
        });
    }
    catch (error) {
        console.log(error);
    }
}