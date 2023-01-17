import React from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';

const AotdPage: React.FC = () => {
    return (
        <main className='aotd'>
            <AotdHeader />
        </main>
    );
};

export default AotdPage;