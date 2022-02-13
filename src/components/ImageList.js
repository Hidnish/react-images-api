import React from "react";
import "./ImageList.css"
import ImageCard from './ImageCard'

const ImageList = props => {
    // List of elements require a key
    const images = props.images.map(image => {
        // Assign key={} to the root element (div), i.e. if img was wrapped in a div
        return <ImageCard key={image.id} image={image} />;
    })
    return <div className="image-list">{images}</div>;
}


export default ImageList;
