import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import './styles/_global.scss';
import HomePage from './Pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
