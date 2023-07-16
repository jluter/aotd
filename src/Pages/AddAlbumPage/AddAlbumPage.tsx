import React, { Component } from 'react';
import './AddAlbumPage.scss';
import AotdHeader from '../../Components/AotdHeader/AotdHeader';
import AotdAlbumInfo from '../../Components/AotdAlbumInfo/AotdAlbumInfo';
import {MdAlbum} from 'react-icons/md';
import axios from 'axios';

interface Props {
  handleArtistClick: (id: string) => void;
}
interface State {
    artistForm: string;
    getArtistData: [];
    albumData: [];
    artistId: string;
}

class AddAlbumPage extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            artistForm: '',
            getArtistData: [],
            albumData: [],
            artistId: ''
        };

    }

    handleAddToAlbum = () => {
      this.setState({
        getArtistData: []
      });
    };

      handleArtistClick = (id: string) => {

        axios.post('http://localhost:5050/aotd/albums', {
            artistId: id  
        })
        .then((response) => {
          this.setState({
            albumData: response.data
          })
          console.log('test', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
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
                getArtistData: response.data,
                albumData: []
            })
            console.log("Aotd Page", response.data)
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
          <main className="add-album">
            <AotdHeader />
            {this.state.getArtistData.length === 0 ? (
              <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                  className="search-form__input"
                  type="text"
                  onChange={this.handleArtistNameChange}
                  placeholder="Artist name ..."
                  value={this.state.artistForm}
                ></input>
                <button
                  className="search-form__button"
                  type="submit"
                  value="artistButton"
                >
                  <MdAlbum size="1.5rem" />
                </button>
              </form>
            ) : (
              <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                  <input
                    className="search-form__input"
                    type="text"
                    onChange={this.handleArtistNameChange}
                    placeholder="Artist name ..."
                    value={this.state.artistForm}
                  ></input>
                  <button
                    className="search-form__button"
                    type="submit"
                    value="artistButton"
                  >
                    <MdAlbum size="1.5rem" />
                  </button>
                </form>
                <AotdAlbumInfo getArtistData={this.state.getArtistData} albumData={this.state.albumData} handleArtistClick={this.handleArtistClick} handleAddToAlbum={this.handleAddToAlbum}/>
              </div>
            )}
          </main>
        );
    }
};

export default AddAlbumPage;