import React from 'react';

function Gallery(props) {
  return (
    <div className="gallery">
      {props.images.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </div>
  );
}

export default Gallery;
