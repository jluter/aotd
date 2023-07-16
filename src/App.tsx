import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import './styles/_global.scss';
import AddAlbumPage from './Pages/AddAlbumPage/AddAlbumPage';
import AlbumListPage from './Pages/AlbumListPage/AlbumListPage';
import Nav from './Components/Nav/Nav';
const App: React.FC = () => {
  return (
    <BrowserRouter className="app">
      <Nav/>
      <Switch>
        <Route path="/addalbum" component={AddAlbumPage} />
        <Route path="/aotd" component={AlbumListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
