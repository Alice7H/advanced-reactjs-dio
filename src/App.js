import React from 'react';
import PhotoGallery from './Components/Gallery';

function App() {
  const photos = [
    'https://picsum.photos/id/10/200',
    'https://picsum.photos/id/11/200',
    'https://picsum.photos/id/12/200',
    'https://picsum.photos/id/13/200',
    'https://picsum.photos/id/14/200',
    'https://picsum.photos/id/15/200',
    'https://picsum.photos/id/16/200',
  ];

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <PhotoGallery photos={photos} />
    </>
  );
}

export default App;