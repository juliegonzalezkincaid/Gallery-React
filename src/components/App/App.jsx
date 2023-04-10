import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react'
import GalleryList from '..GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] =useState('');
  const fetchGalleryInfo =() =>{
    axios.get('gallery').then((response) => {
      setGalleryList(response.data);

    }).catch((error) =>{
      console.log(`Error in GET in App. ${error}`)
      alert('Something went wrong in App GET')
    });
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList/>
        <img src="images/goat_small.jpg"/>
        <img src= "images/blueportrait.png"/>
      </div>
    );
}

export default App;
