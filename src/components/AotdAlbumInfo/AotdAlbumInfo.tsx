import React, {useState} from 'react';
import './AotdAlbumInfo.scss';
import ArtistSearchResults from '../ArtistSearchResults/ArtistSearchResults';
import axios from 'axios';

interface Props {
    getArtistData: [];
    albumData: [];
    handleArtistClick: (id: string) => void;
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData, albumData, handleArtistClick }) => {

    return (
        <div>
            {/* Needs to properly pass state from AotdPage so that when a new artist is searched, it shows <ArtistSearchResults> again, instead of the album list */}
            { albumData.length > 0 
            ? <p>{JSON.stringify(albumData)}</p>
            : <ArtistSearchResults handleArtistClick={handleArtistClick} getArtistData={getArtistData} albumData={albumData}/>
            } 
        </div>
    );
};

export default AotdAlbumInfo;