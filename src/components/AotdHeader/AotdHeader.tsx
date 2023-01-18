import React from 'react';
import './AotdHeader.scss';

const AotdHeader: React.FC = () => {
    return (
        <header className="aotd-header">
            <h1 className='aotd-title'>Album of the Day</h1>
        </header>
    );
};

export default AotdHeader;