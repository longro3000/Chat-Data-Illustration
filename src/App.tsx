import React, { useState } from 'react';

import InputForm from './components/InputForm';
import TableTab from './components/TableTab';
import SummaryCard from './components/SummaryCard';
import GraphTab from './components/GraphTab';

function App() {
    const [activeTab, setActiveTab] = useState('Table');

    return (
        <div className="ui container">
            <InputForm />
            <SummaryCard />
            <div className="ui secondary menu" style={{margin: "50px 42% 10px 42%" }}>
                <a className={`item ${activeTab === 'Table' && 'active'}`} data-tab="Table" onClick={() => setActiveTab('Table')}>Table</a>
                <a className={`item ${activeTab === 'Graph' && 'active'}`} data-tab="Graph" onClick={() => setActiveTab('Graph')}>Graph</a>
            </div>
            <div className={`ui ${activeTab === 'Table' && 'active'} tab`} data-tab="Table">
                <TableTab />
            </div>
            <div className={`ui ${activeTab === 'Graph' && 'active'} tab`} data-tab="Graph">
                <GraphTab activeTab={activeTab}/>
            </div>

        </div>
    );
}

export default App;
