import React from 'react';
import './AotdAlbumInfo.scss';
import ArtistSearchResults from '../ArtistSearchResults/ArtistSearchResults';

interface Props {
    getArtistData: [];
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    console.log("aotdalbuminfo", getArtistData)
    return (
        <div>
            <h1>SUCCESSFUL RETURN</h1>
            <ArtistSearchResults getArtistData={getArtistData}/>
        </div>
    );
};

export default AotdAlbumInfo;