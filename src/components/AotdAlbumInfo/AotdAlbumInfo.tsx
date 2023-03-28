import React from 'react';
import './AotdAlbumInfo.scss';

interface Props {
    getArtistData: {}
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData }) => {

    console.log("aotdalbuminfo", getArtistData)
    return (
        <div>

        </div>
    );
};

export default AotdAlbumInfo;