import React, { Component } from 'react';
import './AlbumListPage.scss';
import axios from 'axios';


interface Props {

}

interface State {
    aotdList: []
}

class AlbumListPage extends Component<Props, State> {


    state: State = {
        aotdList: []
    }


    componentDidMount(): void {
        axios.get('http://localhost:5050/aotd/getAlbumList')
        .then(response => {
            console.log(typeof response.data);
            this.setState({
                aotdList: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

 
    render() {

        //assigning the album list state to a mapped object
        const albumsOfTheDay = this.state.aotdList.map((album: {artists: [], id: string, name: string, image: string}, index: number) => {
            const currentAlbum = album;

            //Adjust what this variable will look like
            return <p key={index}>{currentAlbum.name}</p>
        })


        return (
          <main className="aotd">
            Album of the Day List
            {albumsOfTheDay}
          </main>
        );
    }
};

export default AlbumListPage;