import React from 'react';
import './AotdAlbumInfo.scss';
import ArtistSearchResults from '../ArtistSearchResults/ArtistSearchResults';

interface Props {
    getArtistData: [];
    albumData: [];
    handleArtistClick: (id: string) => void;
}

const AotdAlbumInfo: React.FC<Props> = ({ getArtistData, albumData, handleArtistClick }) => {

    const returnedAlbums = albumData.map(album => {

        //error handling to make sure all required fields are present
        if (!album['name'] || !album['image'] || !album['id']) {
            return null;
        }

        //requires bracket notation due to issues with microsoft's typescript compiler
        let albumName = album['name'];
        let albumImg = album['image'];
        let albumId = album['id'];
        
        return (
            <figure key={albumId} className='album-search-results' onClick={() => {console.log('clicked')}}>
                <img className="album-search-results__img" src={albumImg} alt={`Album cover art for` + {albumName}}/>
                <p className='album-search-results__name'>{albumName}</p>
            </figure>
        )
    })


    return (
        <div>
            {/* Needs to properly pass state from AotdPage so that when a new artist is searched, it shows <ArtistSearchResults> again, instead of the album list */}
            { albumData.length > 0 
            ? <section className="returned-album-container">
                {returnedAlbums}
            </section>
            : <ArtistSearchResults handleArtistClick={handleArtistClick} getArtistData={getArtistData} albumData={albumData}/>
            } 
        </div>
    );
};

export default AotdAlbumInfo;