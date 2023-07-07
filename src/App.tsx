import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import './styles/_global.scss';
import AddAlbumPage from './Pages/AddAlbumPage/AddAlbumPage';

const App: React.FC = () => {
  return (
    <BrowserRouter className="app">
      <Switch>
        <Route path="/addalbum" component={AddAlbumPage} />
        <Route path="/aotd" component={AddAlbumPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
