import React, { Component } from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';

class AotdPage extends Component {
    render() {

        return (
            <main className='aotd'>
            <AotdHeader />
        </main>
    );
    }
};

export default AotdPage;