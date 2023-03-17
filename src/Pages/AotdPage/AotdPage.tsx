import React, { Component } from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';

class AotdPage extends Component {

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
    }

    render() {

        return (
            <main className='aotd'>
                <AotdHeader />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Artist name'></input>
                    <button type='submit'>Submit</button>
                </form>
            </main>
    );
    }
};

export default AotdPage;