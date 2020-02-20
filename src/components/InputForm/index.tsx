import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchChat } from '../../store/chat/actions';
import { saveForm } from '../../store/form/actions';
import { Form } from '../../store/form/types';
import { rootState } from '../../store';

const InputForm = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const dispatch = useDispatch();
    const savedForm = useSelector((state: rootState) => state.form);
    //const form = useSelector((state: AppState) => { return state.form }); 

    useEffect(
        () => {
            setStartDate(savedForm.startDate);
            setEndDate(savedForm.endDate);
            setAccessToken(savedForm.accessToken);
        },[]
    )
    
    const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
        const form: Form = {
            startDate: startDate,
            endDate: endDate,
            accessToken: accessToken
        }
        dispatch(fetchChat(form));
        dispatch(saveForm(form));
        event.preventDefault();
        console.log(startDate, endDate, accessToken);
    }

    return (
        <form className="ui form" onSubmit={onSubmitHandle}>
            <div className="two fields">
                <div className="field">
                    <label>Start Date</label>
                    <div className="ui input">
                        <input
                            type="date"
                            value={startDate}
                            onChange={event => setStartDate(event.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label>End Date</label>
                    <div className="ui input">
                        <input
                                type="date"
                                value={endDate}
                                onChange={event => setEndDate(event.target.value)}
                            />
                    </div>
                </div>
            </div>
            <div className="field">
                <label>Access Token</label>
                <div className="fields">
                    <div className="twelve wide field">
                        <div className="ui labeled input">
                            <div className="ui label">
                                <i className="user icon"></i>
                            </div>
                            <input
                                    value={accessToken}
                                    onKeyPress={event => { 
                                        if (event.key.match("Enter"))
                                            event.preventDefault() }}
                                    onChange={event => setAccessToken(event.target.value)}
                                    placeholder="Access Token"
                                />
                            
                        </div>
                    </div>
                    <div className="four wide field">
                        <button className="ui button" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

InputForm.displayName = 'InputForm';

export default InputForm;