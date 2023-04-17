import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList'

function App() {
  const [galleryList, setGalleryList] =useState([]);
  
  const fetchGalleryData =() =>{
//GET
    axios.get('/gallery')
    .then((response) => {
     console.log("in GET GallleryList", response);
     setGalleryList(response.data);

    }).catch((error) =>{
      console.log(`Error in GET in App. ${error}`)
      alert('Something went wrong in App GET')
    });
  }
  

  useEffect(() => {
    fetchGalleryData();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p></p>
        <GalleryList
        galleryList={galleryList}
        fetchGalleryData={fetchGalleryData}
        />
        
      
        
      </div>
    );
}

export default App;
