import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryItems from './GalleryItems';
import './GalleryList.css';

function GalleryList() {
  const [listOfItems, setListOfItems] = useState([]);

  const fetchGalleryList = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setListOfItems(response.data);
      })
      .catch((error) => {
        console.log(`Error in GET on GalleryList: ${error}`);
        alert('Something went wrong in GalleryList');
      });
  };

  useEffect(() => {
    fetchGalleryList();
  }, []);

  return (
    <div className='galleryContainer'>
      {JSON.stringify(listOfItems)}
      {listOfItems.map((item) => (
        <GalleryItems
          key={item.id}
          item={item}
          title={item.title}
          path={item.path}
          fetchGalleryList={fetchGalleryList}
         
        />
      ))}
    </div>
  );
}

export default GalleryList;

