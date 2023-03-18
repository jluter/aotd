import React, { Component } from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';

class AotdPage extends Component {

    state = {
        artistForm: '',
    };


    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({artistForm: event.target.value})
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.artistForm);
    }


    render() {

        return (
            <main className='aotd'>
                <AotdHeader />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} placeholder='Artist name'></input>
                    <button type='submit' value='artistButton'>Submit</button>
                </form>
            </main>
    );
    }
};

export default AotdPage;