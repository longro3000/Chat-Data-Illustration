import {
    SAVE_FORM_TO_STATE, SaveFormAction, Form
} from './types';

export const saveForm = (form: Form): SaveFormAction => {
    return {
        type: SAVE_FORM_TO_STATE,
        payload: form
    }
}