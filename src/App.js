import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PdfViewer from './components/PdfViewer';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <PdfViewer />
    </div>
  );
}

export default App;
