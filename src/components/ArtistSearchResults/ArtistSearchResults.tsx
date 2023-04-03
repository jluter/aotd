import React from 'react';
import './ArtistSearchResults.scss';

interface Props {
    getArtistData: [];
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    const returnedArtists = getArtistData.map(artist => {
        //requires bracket notation due to issues with microsoft's typescript compiler
        let artistName = artist['name'];
        let artistImg = artist['image'];
        
        return (
            <figure className='artist-search-results'>
                <img className="artist-search-results__img" src={artistImg} alt={`Album cover art for` + {artistName}}/>
                <p className='artist-search-results__name'>{artistName}</p>
            </figure>
        )
    })

    console.log("aotdalbuminfo", getArtistData)
    return (
        <div>
            {returnedArtists}
        </div>
    );
};

export default AotdAlbumInfo;