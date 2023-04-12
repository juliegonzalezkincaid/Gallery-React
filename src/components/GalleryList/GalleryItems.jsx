import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';
import React from 'react'


function GalleryItems ({item, fetchGalleryList}) {
     const [likeCount,setLikeCount]= useState(item.like);
    
//PUT
    const handleLike = (e) => {
        axios.put(`/gallery/like/${item.id}`)
        .then((response) =>{
            console.log(response);
            //Update the item with the new like count
            item.like =response.data.like;
            //Update the state variable with the new like count
            setLikeCount(response.data.like);
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in handleLike, ${error}`);
            alert('Something went wrong in handleLikes');
        })
        
    }

   const [toggle, setToggle] =useState(false);

    return (
        <div className="galleryItems">
            <div 
                onClick={(e) => setToggle(!toggle)} 
                className="imageContainer">
                <img src={item.path} />
                <div className="imageDescription">
                    {toggle && item.description}
                </div>
                <Button 
                variant="outlined"
                    onClick={handleLike}
                    className="likeButton"
                > 
                    Like <span>{item.like}</span>
                </Button> 
                                                                                                 
            </div>
        </div>
//         <div className="galleryItems">
//             <div 
//                 onClick= {(e) => setToggle(!toggle)}                       <div className="imageContainer">
//                     {toggle && item.description}
//             <img 
//                src={item.path}>
//             </img>
//             <div
//                 className="imageDescription">
//                 {item.description}
//             </div>
//             {/* <img className="image" src={item.path} 
//                 onClick={handleLike} /> :
//                 <p onClick={handleLike} className="description"> 
//                 {item.description} </p> */}
//           <Button onClick={(e) => handleLike(e)}
//                   className= "likeButton"> 
//                   Like
//                   {item.like}
//           </Button> 
              

                
//             </div>
//         </div>
     )
 }

export default GalleryItems;