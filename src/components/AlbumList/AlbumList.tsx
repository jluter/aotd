import React from 'react';
import './AlbumList.scss';

interface Props {
    aotdList: [];
}

const AlbumList: React.FC<Props> = ({aotdList}) => {

    
    
    return (
      <section className="album-list-container">

        {/* assigning the album list state to a mapped object */}
        {aotdList.map(
          (album: {
            artists: [];
            id: string;
            name: string;
            image: string;
            time: string;
            uuid: string;
          }) => {
            return (

              <div className="album" key={album.uuid}>
                <div className="album__image-container">
                  <img
                    className="album__image"
                    src={album.image}
                    alt="Album cover"
                  />
                </div>
                <div className="album__name">{album.name}</div>
                <div className='album__date'>{album.time}</div>
              </div>
            );
          }
        )}

      </section>
    );
};

export default AlbumList;