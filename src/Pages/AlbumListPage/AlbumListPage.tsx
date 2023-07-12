import React, { Component } from 'react';
import './AlbumListPage.scss';
import axios from 'axios';
import AlbumList from '../../Components/AlbumList/AlbumList';


interface Props {}

interface State {
    aotdList: []
}

class AlbumListPage extends Component<Props, State> {


    state: State = {
        aotdList: []
    }


    componentDidMount(): void {
        axios.get('http://localhost:5050/aotd/getAlbumList')
        .then(response => {
            this.setState({
                aotdList: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

 
    render() {


      return (
        <main className="aotd">
          Album of the Day List
        <AlbumList aotdList={this.state.aotdList}/>
        </main>
      );
    }
};

export default AlbumListPage;