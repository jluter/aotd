import React from 'react';
import './AddAlbumModal.scss';
import axios from 'axios';

interface Props {
    showMe: string;
    album: {artist: [], id: string, image: string, name: string};
    setShowMe: (showMe: string) => void;
    handleAddToAlbum: () => void;
}

const AddAlbumModal: React.FC<Props> = ({ showMe, album, setShowMe, handleAddToAlbum}) => {



    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


    const addAlbumToAotd = (album: Object) => {

        const time = new Date();
        let timeString: string = months[time.getMonth()] + ' ' +time.getDate().toString() + ' ' + time.getFullYear().toString();


        axios.patch('http://localhost:5050/aotd/addAlbum', {
            album: album,
            time: timeString
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })    

        setShowMe('false');
        handleAddToAlbum();
    };

    return (
        <div id="add-album-modal" className={showMe}>
            <section className="modal-album">

            <h2 className="modal-album__question">Are you sure you want to add this album? </h2>
            <div className="modal-album__info">
                <h1 className='modal-album__title'>
                    {album.name}
                </h1>
                <img width='200' alt="Album cover art" src={album.image}/>
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