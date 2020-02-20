import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../../store';

const SummaryCard = () => {
    const totalConversationCount = useSelector((state: rootState) => state.chat.chatSummary?.total_conversation_count);

    const totalUserMessageCount = useSelector((state: rootState) => state.chat.chatSummary?.total_user_message_count);

    const totalVisitorMessageCount = useSelector((state: rootState) => state.chat.chatSummary?.total_visitor_message_count);

    const renderSummary = (label: string, data: number) => {
        return (
            <div className="ui statistic">
                <div className="label">
                    {label}
                </div>
                <div className="value">
                    {data}
                </div>
            </div>
        )
    }
    if (totalConversationCount === undefined || totalUserMessageCount === undefined || totalVisitorMessageCount === undefined) {
        return ( 
            <div className="card">
                <div className="content">
                    <div className="ui segment">
                        <div className="ui active inverted dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                        <p></p>
                    </div> 
                </div> 
            </div>
        )
    } 
    return (
        <div className="ui cards" style={{margin: "10% 12%"}}>
            { renderSummary("Total Conversation Count",totalConversationCount)}
            { renderSummary("Total User Message Count",totalUserMessageCount)}
            { renderSummary("Total Visitor Message Count",totalVisitorMessageCount)}
        </div>
    )
}

SummaryCard.displayName = "SummaryCard";

export default SummaryCard;