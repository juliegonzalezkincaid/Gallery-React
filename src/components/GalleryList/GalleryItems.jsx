import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';


function GalleryItems ({item, fetchGalleryList}) {
    useEffect(() => {
        fetchGalleryList();
      }, []);   
    
//PUT
    const handleLike = (e) => {
        axios.put(`/gallery/like/${item.id}`)
        .then((response) =>{
            //  console.log(response);
            // //Update the item with the new like count
            // item.like =response.data.like;
            // //Update the state variable with the new like count
            // setLikeCount(response.data.like);
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in handleLike, ${error}`);
            alert('Something went wrong in handleLikes');
        })
        
    }

   const [toggle, setToggle] =useState(false);

    return (

        <div className="galleryItems">
            <Card sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                border: 2,
                margin: 2,
                boxShadow: 10,

            }}>
                <CardContent>
                

            <div 
                onClick={(e) => setToggle(!toggle)} 
                className="imageContainer">
                <img src={item.path} />
                <div className="imageDescription">
                    { item.description}
                </div>
                <CardActions>
                <Button 
                variant="outlined"
                    onClick= {(e) => handleLike(e)}
                    // onClick={handleLike}
                    className="likeButton"
                > 
                <Typography>
              
                Like
                <span>{item.likes}</span>
                
                    </Typography>
                </Button> 
                </CardActions>                                                                                
            </div>
            </CardContent>
            </Card>
        </div>

)
}

export default GalleryItems;

