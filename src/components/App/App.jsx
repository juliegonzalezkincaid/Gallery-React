import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList'

function App() {
  const [galleryList, setGalleryList] =useState([]);
  
  const fetchGalleryData =() =>{
//GET
    axios
    .get('/gallery')
    .then((response) => {
     console.log("in GET GallleryList", response);
     setGalleryList(response.data);

    }).catch((error) =>{
      console.log(`Error in GET in App. ${error}`)
      alert('Something went wrong in App GET')
    });
  }
  //PUT for like 
  
  const likeItems = (item) => {
    axios
    .put(`/gallery/like/${item.id}`, item?.likes)
    .then(() => { 
      fetchGalleryData ();
    })
    .catch((error) => {
      alert("error in PUT likes")
  console.log(error);
})
  };
  useEffect(() => {
    // fetchGalleryData();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList
        likeItems ={likeItems}/>
        
      
        {/* <img src= "images/blueportrait.png"   /> */}
      </div>
    );
}

export default App;
