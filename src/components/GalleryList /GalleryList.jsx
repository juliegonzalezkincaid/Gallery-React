import react from 'react';
import GalleryItems from './GalleryItems';
import axios from 'axios';
import {useEffect, useState} from 'react';

function GalleryList () {
    const [listOfItems, setListOfItems] = useState ([]);
     
    const fetchGalleryList =() => {
        axios.get('/gallery').then((response => {
            setListOfItems(response.data);

        }).catch((error) => {
            console.log(`Error in GET on GalleryList: ${error}`)
            alert('Something went wrong in GalleryList');
        })
        )
    
    }
    useEffect(() => {
        fetchGalleryList();
    })
    return (
        <>
        {listOfItems.map((item) => (
            <GalleryItems
                key={item.id}
                title={item.title}
                path={item.path}
                fetchGalleryList={fetchGalleryList}
            />
        ))}
        </>
    )
}

export default GalleryList;
