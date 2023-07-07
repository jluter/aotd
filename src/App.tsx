import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import './styles/_global.scss';
import AddAlbumPage from './Pages/AddAlbumPage/AddAlbumPage';
import AlbumListPage from './Pages/AlbumListPage/AlbumListPage';

const App: React.FC = () => {
  return (
    <BrowserRouter className="app">
      <Switch>
        <Route path="/addalbum" component={AddAlbumPage} />
        <Route path="/aotd" component={AlbumListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
