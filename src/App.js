import React from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Feeds from "./components/Feeds.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Feeds/>
      <Footer/>
    </div>
  );
}

export default App;
