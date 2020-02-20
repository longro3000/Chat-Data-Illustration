import React from 'react';
import { ChatByDate } from '../../../store/chat/types';

interface TableRowProps {
    chat: ChatByDate
}
const TableRow = ({chat}: TableRowProps) => {
    return (
        <>
            <td>
                {chat.conversation_count}
            </td>
            <td>
                {chat.missed_chat_count}
            </td>
            <td>
                {chat.visitors_with_conversation_count}
            </td>
            <td>
                {chat.date}
            </td>
        </>
    )
}

TableRow.displayName = "TableRow";

export default TableRow;