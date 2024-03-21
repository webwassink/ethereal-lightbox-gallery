// index.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-images';

/**
 * A customizable lightbox gallery component for React.
 * @param {Object[]} images - An array of objects representing images to display in the gallery.
 * @param {string} images[].src - The URL of the image.
 * @param {string} [images[].caption] - The caption for the image.
 * @returns {JSX.Element} The LightboxGallery component.
 */
function LightboxGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  /**
   * Opens the lightbox at a specific index.
   * @param {number} index - The index of the image to display in the lightbox.
   */
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  /**
   * Closes the lightbox.
   */
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.caption || 'Image'}
          onClick={() => openLightbox(index)}
          style={{ cursor: 'pointer' }}
        />
      ))}
      <Gallery
        images={images}
        currentIndex={currentImage}
        isOpen={lightboxIsOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}

LightboxGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default LightboxGallery;
