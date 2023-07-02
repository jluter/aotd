import React, {useState} from 'react';
import './AotdAlbumInfo.scss';
import ArtistSearchResults from '../ArtistSearchResults/ArtistSearchResults';
import axios from 'axios';

interface Props {
    getArtistData: [];
    albumData: [];
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData, albumData }) => {
    const [albumInfo, setAlbumInfo] = useState();

    const handleArtistClick = (id: string) => {

        axios.post('http://localhost:5050/aotd/albums', {
            artistId: id  
        })
        .then((response) => {
            setAlbumInfo(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }    

    // console.log("aotdalbuminfo", getArtistData)
    return (
        <div>
            {/* Needs to properly pass state from AotdPage so that when a new artist is searched, it shows <ArtistSearchResults> again, instead of the album list */}
            { albumInfo 
            ? <p>{JSON.stringify(albumInfo)}</p>
            : <ArtistSearchResults handleArtistClick={handleArtistClick} getArtistData={getArtistData} albumData={albumData}/>
            } 
        </div>
    );
};

export default AotdAlbumInfo;