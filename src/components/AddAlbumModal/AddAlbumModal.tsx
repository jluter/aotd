import React, { useState } from 'react';
import './AddAlbumModal.scss';
import axios from 'axios';

interface Props {
    // addAlbumToAotd: (id: string) => void;
    showMe: string;
    album: Object;
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
    };

    return (
        <div id="add-album-modal" className={showMe}>
            <h2>Are you sure you want to add this album? </h2>
            <div>Insert album info here</div>
                <div>
                    {/* Add function to add album to album of the day list on node.js server */}
                    <button onClick={() => {addAlbumToAotd(album)}}>Yes</button>
                    <button onClick={() => setShowMe('false')}>No</button>
                </div>
        </div>
    );
};

export default AddAlbumModal;