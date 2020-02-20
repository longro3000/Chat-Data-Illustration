import React, { useState } from 'react';

import Table from './Table';
import PagingButtons from './PagingButtons';
import { PageContext } from '../../context';

const TableTab = () => {
    const [pageContext, setPageContext] = useState({
        pageNumber: 1,
        onChange: (value: number) => {
            setPageContext(current => ({
                ...current,
                pageNumber: value
            }))
        }
    });
    return (
        <>
            <PageContext.Provider value={pageContext}>
                <Table />
                <PagingButtons />
            </PageContext.Provider>
        </>
    )
}

TableTab.displayName = "TableTab";

export default TableTab;