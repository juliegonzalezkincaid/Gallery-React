const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    //TODO need to look at this part
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
console.log(galleryItem.id)
console.log(galleryId)
        if(Number(galleryItem.id) === galleryId) {
            console.log(galleryItem.likes)
            galleryItem.likes += 1;
        }
    }
    
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route
//?


module.exports = router;