import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import './styles/_global.scss';
import AotdPage from './Pages/AotdPage/AotdPage';

const App: React.FC = () => {
  return (
    <BrowserRouter className="app">
      <Switch>
        <Route path="/" component={AotdPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
