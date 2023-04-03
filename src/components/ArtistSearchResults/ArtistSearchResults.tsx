import React from 'react';
import './ArtistSearchResults.scss';

interface Props {
    getArtistData: [];
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    const returnedArtists = getArtistData.map(artist => {
        //requires bracket notation due to issues with microsoft's typescript compiler
        let artistName = artist['name'];
        let artistImg = artist['image']
        console.log(artistName);
        return (
            <figure>
                <img src={artistImg} alt={`Album cover art for` + {artistName}}/>
                <p>{artistName}</p>
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