import {
    FormState, 
    SaveFormAction, 
    SAVE_FORM_TO_STATE
} from './types';

const initialState: FormState = {
    startDate: '',
    endDate: '',
    accessToken: ''
}

export default (state: FormState = initialState, action: SaveFormAction) => {
    switch (action.type) {
        case SAVE_FORM_TO_STATE:
            return {...action.payload}
        default:
            return state
    }
}