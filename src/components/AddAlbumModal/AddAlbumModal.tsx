import React, { useState } from 'react';
import './AddAlbumModal.scss';
import axios from 'axios';

interface Props {
    // addAlbumToAotd: (id: string) => void;
    showMe: string;
    album: {artist: [], id: string, image: string, name: string};
    setShowMe: (showMe: string) => void
}

const AddAlbumModal: React.FC<Props> = ({ showMe, album, setShowMe}) => {

    const addAlbumToAotd = (album: Object) => {

        axios.patch('http://localhost:5050/aotd/addAlbum', {
            album: album
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })    

        setShowMe('false');
    };

    return (
        <div id="add-album-modal" className={showMe}>
            <section className="modal-album">

            <h2 className="modal-album__question">Are you sure you want to add this album? </h2>
            <div className="modal-album__info">
                <h1 className='modal-album__title'>
                    {album.name}
                </h1>
                <img width='200' src={album.image}/>
            </div>
                <div className='modal-album__button-container'>
                    {/* Add function to add album to album of the day list on node.js server */}
                    <button className="modal-album__buttons" type="button" onClick={() => {addAlbumToAotd(album)}}>Yes</button>
                    <button className="modal-album__buttons" type="button" onClick={() => setShowMe('false')}>No</button>
                </div>
            </section>
        </div>
    );
};

export default AddAlbumModal;