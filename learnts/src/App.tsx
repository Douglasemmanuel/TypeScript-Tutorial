import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './post/PostList';
import Page from './Page';
import SearchButton from "../src/component/SearchButton"
import DisplayScreen from './component/DisplayScreen';
import StateScreen from './component/StateScreen';
import { ThemeProvider } from './context/ThemeContext';
import Refhookscreen from './Refhook/Refhookscreen';
import ItemList from './Item/ItemList';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Page/>
      <SearchButton/>
      <DisplayScreen/>
      <StateScreen/>
      <Refhookscreen/>
      </ThemeProvider>
      <ItemList/>
      {/* <searchButton/> */}
       {/* <PostList/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
          */}
    </div>
  );
}

export default App;
