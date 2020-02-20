import React, { useState } from 'react';
import { SortOrder, ClickSortHandleFunction, ClickColumnHandleFunction } from '../../../types';
// eslint-disable-next-line import/no-extraneous-dependencies

interface TableHeaderProps {
    headers: string[],
    sortColumn: string,
    sortOrder: SortOrder,
    onSortOrderChange: ClickSortHandleFunction,
    onColumnClick: ClickColumnHandleFunction
}

const TableHeader = ({ headers, sortColumn, sortOrder, onSortOrderChange, onColumnClick }: TableHeaderProps) => {
    const [isSorted, setIsSorted] = useState<boolean>(false);

    const handleClickEvent = () => {
        setIsSorted(true);
        if (sortOrder === 'asc') {
            onSortOrderChange('desc');
            // sortOrder = 'desc';
        } else onSortOrderChange('asc');
    };

    function renderHeader() {
        return headers.map(header => (
            <th
                key={header}
                className={`
                    ${header.toLowerCase() === sortColumn && isSorted === true ? 'sorted' : ''} 
                    ${sortOrder === 'asc' ? 'ascending' : 'descending'}
                    `}
                onClick={() => {
                    onColumnClick(header.toLowerCase());
                    handleClickEvent();
                }}
            >
                {header}
            </th>
        ));
    }

    return <tr>{renderHeader()}</tr>;
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;