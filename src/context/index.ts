import React from 'react';

export const PageContext = React.createContext({
    pageNumber: 1,
    onChange: (value: number) => {}
});