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
        const albumsOfTheDay = this.state.aotdList.map((album: {artists: [], id: string, name: string, image: string, time: string, uuid: string}) => {

            //Adjust what this variable will look like
            return  <div className='album' key={album.uuid}>
                        <div className='album__name'>{album.name}</div>
                        <div className='album__image-container'>
                            <img className='album__image' src={album.image} alt='Album cover'/>
                        </div>
                    </div>;
        })


        return (
          <main className="aotd">
            Album of the Day List
            <section className='album-list-container'>
                {albumsOfTheDay}
            </section>
          </main>
        );
    }
};

export default AlbumListPage;