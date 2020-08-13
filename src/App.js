import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchResultContainer from "./components/SearchResult/SearchResultContainer";
import Navbar from './components/Navbar';
// import SearchForm from './components/SearchForm';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchResultContainer />
    </div>
  );
}

export default App;
