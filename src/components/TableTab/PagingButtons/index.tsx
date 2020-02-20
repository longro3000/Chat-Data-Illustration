import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { rootState } from '../../../store';
import { PageContext } from '../../../context';

const PagingButtons = () => {
    const pageNumbers = useSelector((state: rootState) => {
        const dataLength = state.chat.chatSummary?.by_date.length
        if (dataLength)
            return dataLength / 5;
        return 0;
    });

    const [buttons, setButtons] = useState<number[]>([]);

    const { pageNumber, onChange } = useContext(PageContext);

    useEffect(
        () => {
            let i: number = 1;
            let temp: number[] = [];
            for (i; i <= Math.ceil(pageNumbers); i++) {
                temp.push(i);
            }

            setButtons(temp);
        }, [pageNumbers]
    )

    const renderButtons = () => {
        return buttons.map(button => {
            return (
                <a 
                    className={`${pageNumber === button && 'active' } item`}
                    onClick={() => onChange(button)}
                    key={button}
                >
                {button}
                </a>
            );
        });
    };

    return (
        <div className="ui pagination menu" style={{margin: "10px 30%" }}>
            <a 
                className='item'
                onClick={() => {
                    if (pageNumber > 1)
                        onChange(pageNumber-1)
                }}
            >
                <i className="chevron left icon"></i>
            </a>
            { renderButtons() }
            <a 
                className='item'
                onClick={() => {
                    if (pageNumber < pageNumbers)
                        onChange(pageNumber+1)
                }}
            >
                <i className="chevron right icon"></i>
            </a>
        </div>
    )
}

PagingButtons.displayName = "PagingButtons";

export default PagingButtons;