import React, { Component } from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';
import axios from 'axios';

class AotdPage extends Component {

    state = {
        artistForm: '',
    };


    handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            artistForm: event.target.value
        });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.artistForm);

        axios.post('http://localhost:5050/aotd', {
            artistName: this.state.artistForm  
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get('http://localhost:5050/aotd')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }


    render() {

        return (
            <main className='aotd'>
                <AotdHeader />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleArtistNameChange} placeholder='Artist name'></input>
                    <button type='submit' value='artistButton'>Submit</button>
                </form>
            </main>
    );
    }
};

export default AotdPage;