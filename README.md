## ethereal-lightbox-gallery

A customizable lightbox gallery component for React.

### Installation

You can install `ethereal-lightbox-gallery` via npm:

```bash
npm install ethereal-lightbox-gallery
```

### Usage

```javascript
import React from 'react';
import LightboxGallery from 'ethereal-lightbox-gallery';

const images = [
  { src: 'image1.jpg', caption: 'Image 1' },
  { src: 'image2.jpg', caption: 'Image 2' },
  { src: 'image3.jpg', caption: 'Image 3' },
];

function App() {
  return <LightboxGallery images={images} />;
}

export default App;
```

### Props

- `images` (required): An array of objects representing images to display in the gallery.
    - `src` (required): The URL of the image.
    - `caption` (optional): The caption for the image.
