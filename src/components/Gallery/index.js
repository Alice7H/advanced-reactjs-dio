import { useState, Fragment } from 'react';
import { memo } from 'react';
import Button from '../Button';
import './style.css';

function PhotoGallery({ photos }) {
  const [gallery, setGallery] = useState(photos);

  const renderPhotos = (img, index) => {
    return (
      <Fragment key={index}>
        <img src={img} alt="Imagem aleatória" />
        <Button onClick={() => handleRemove(index)}>Remover foto</Button>
      </Fragment>
    );
  }

  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key);
    setGallery(newGallery);
  }

  return (
    <div className="gallery">
      {gallery.map(renderPhotos)}
    </div>
  );
}

export default memo(PhotoGallery);