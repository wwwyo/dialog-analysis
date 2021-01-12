import React from 'react';
import Router from './Router';
import './assets/reset.css';
import './assets/style.css';
import {Header} from './components/header/index';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  )
}

export default App;