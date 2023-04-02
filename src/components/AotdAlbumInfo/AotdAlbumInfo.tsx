import React from 'react';
import './AotdAlbumInfo.scss';

interface Props {
    getArtistData: []
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    console.log("aotdalbuminfo", getArtistData)
    return (
        <div>
            <h1>AOTD ALBUM INFO</h1>
        </div>
    );
};

export default AotdAlbumInfo;