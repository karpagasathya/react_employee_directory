import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchResultContainer from "./components/SearchResult/SearchResultContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchResultContainer />
    </div>
  );
}

export default App;
