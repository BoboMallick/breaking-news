import React from 'react';
import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';
import Fragment from './Components/Fragment/Fragment'


function App() {
  return (
    <div>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
