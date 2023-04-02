import React, { Component } from 'react';
import './AotdPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';
import AotdAlbumInfo from '../../Components/AotdAlbumInfo/AotdAlbumInfo';
import axios from 'axios';

interface Props {}
interface State {
    artistForm: string;
    getArtistData: [];
}

class AotdPage extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            artistForm: '',
            getArtistData: []
        };

    }

    handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            artistForm: event.target.value
        });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.post('http://localhost:5050/aotd', {
            artistName: this.state.artistForm  
        })
        .then((response) => {
            this.getArtist();
        })
        .then(() =>{
            //reset state and input box to be blank
            this.setState({
                artistForm: '',
            })
        })
        .catch((error) => {
            console.log(error)
        })

    }
    
    getArtist = () => {
        
        axios.get('http://localhost:5050/aotd')
        .then((response) => {
            this.setState({
                getArtistData: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    //needs prevProps first even if unused, as prevState needs to be the second parameter
    componentDidUpdate(prevProps: {},prevState: State): void {
        if (this.state.getArtistData !== prevState.getArtistData) {
            console.log(this.state.getArtistData)
        }
    }

    render() {

        return (
            <main className='aotd'>
                <AotdHeader />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleArtistNameChange} placeholder='Artist name' value={this.state.artistForm}></input>
                    <button type='submit' value='artistButton'>Submit</button>
                </form>
                {this.state.getArtistData.length === 0  
                ? (<h1>Untrue</h1>)
                : (<AotdAlbumInfo getArtistData={this.state.getArtistData}/>) 
                }
            </main>
    );
    }
};

export default AotdPage;