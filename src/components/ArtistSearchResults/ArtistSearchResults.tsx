import React from 'react';
import './ArtistSearchResults.scss';
import axios from 'axios';


interface Props {
    getArtistData: [];
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    const handleArtistClick = (id: string) => {

        axios.post('http://localhost:5050/aotd/albums', {
            artistId: id  
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const returnedArtists = getArtistData.map(artist => {

        //error handling to make sure all required fields are present
        if (!artist['name'] || !artist['image'] || !artist['id']) {
            return null;
        }

        //requires bracket notation due to issues with microsoft's typescript compiler
        let artistName = artist['name'];
        let artistImg = artist['image'];
        let artistId = artist['id'];
        
        return (
            <figure key={artistId} className='artist-search-results' onClick={() => {handleArtistClick(artistId)}}>
                <img className="artist-search-results__img" src={artistImg} alt={`Album cover art for` + {artistName}}/>
                <p className='artist-search-results__name'>{artistName}</p>
            </figure>
        )
    })

    console.log("aotdalbuminfo", getArtistData)
    return (
        <section className="returned-artists-container">
            {returnedArtists}
        </section>
    );
};

export default AotdAlbumInfo;