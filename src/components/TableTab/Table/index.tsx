import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { sortBy, reverse } from 'lodash';

import TableHeader from '../TableHeader';
import { rootState } from '../../../store';
import { SortOrder } from '../../../types';
import { ChatByDate } from '../../../store/chat/types';
import TableRow from '../TableRow';
import { PageContext } from '../../../context';

const Table = () => {
    const headers = ["Conversation Count", "Missed Chat Count", "Visitors With Conversation Count", "Date"];
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [sortColumn, setSortColumn] = useState('date');
    const [filteredChat, setFilteredChat] = useState<ChatByDate[]>([]); 

    const chatByDate = useSelector((state: rootState) => state.chat.chatSummary?.by_date);
    
    const { pageNumber } = useContext(PageContext);
    

    useEffect(
        () => {
            let filterChat = chatByDate?.slice(pageNumber*5-5, pageNumber*5);
            const sortColumnPhase = sortColumn.split(' ').join('_');

            filterChat = sortBy(filterChat, [sortColumnPhase]);

            if (sortOrder === 'desc') filterChat = reverse(filterChat);

            setFilteredChat(filterChat);

        },[sortOrder, sortColumn, pageNumber, chatByDate]
    )

    const renderTableRow = () => {
        return filteredChat.map( chat => {
            return (
                <tr key={chat.date}>
                        <TableRow 
                            chat={chat}
                        />
                </tr>
            );
        }

        );
    }
    return (
        <div>
            <table className="ui celled fixed sortable table">
                <thead>
                    <TableHeader
                        headers={headers}
                        sortColumn={sortColumn}
                        sortOrder={sortOrder}
                        onSortOrderChange={setSortOrder}
                        onColumnClick={setSortColumn}
                    />
                </thead>
                <tbody>{ chatByDate && renderTableRow()}</tbody>
            </table> 
        </div>
    )
}

Table.displayName = "Table";

export default Table;