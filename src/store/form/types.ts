export const SAVE_FORM_TO_STATE = "SAVE_FORM_TO_STATE";

export interface Form {
    startDate: string,
    endDate: string,
    accessToken: string
}

export interface FormState {
    startDate: string,
    endDate: string,
    accessToken: string
}

export interface SaveFormAction {
    type: typeof SAVE_FORM_TO_STATE,
    payload: Form
}