import axios from 'axios';
import { useState } from 'react';
// import Button from '@mui/material/Button';


function GalleryItems ({item, fetchGalleryList}) {
     
    const [toggle, setToggle] =useState(false);
//PUT
    const handleLike = (e) => {
        axios
        .put(`gallery/likes/${item.id}`)
        .then((response) =>{
            console.log(response);
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in handleLikes, ${error}`);
            alert('Something went wrong in handleLikes');
        })
    }

   

    return (
        <div className="galleryItems">
            <div 
                onClick= {(e) => setToggle(!toggle)}                       className="imageContainer">
            <img 
               src={item.path}>
            </img>
            <div
                className="imageDescription">
                {item.description}
            </div>
          <button onClick={(e) => handleLike(e)}
                  className= "likeButton"> 
                  Like
                  {item.like}
          </button> 
              

                
            </div>
        </div>
    )
}

export default GalleryItems;