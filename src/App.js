import React from 'react';
import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';


function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
