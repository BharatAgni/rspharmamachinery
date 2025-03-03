import React, { useEffect, useState, useCallback } from 'react';
import './GalleryPhotos.css';
import photos from '../../assets/photos';
import prev_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';

const GalleryPhotos = ({ hideGallery, setHideGallery }) => {
  const [activePhoto, setActivePhoto] = useState(0);

  // ✅ Fix: useCallback should not depend on photos.length
  const handleNext = useCallback(() => {
    setActivePhoto((prev) => (prev < photos.length - 1 ? prev + 1 : prev));
  }, []);

  const handlePrev = useCallback(() => {
    setActivePhoto((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setHideGallery(true);
    },
    [handleNext, handlePrev, setHideGallery]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (photos.length === 0) return null;

  return (
    <div className={`gallery-photos ${hideGallery ? 'hide' : ''}`}>
      <div className="photos active">
        <img 
          src={photos[activePhoto].photo} 
          alt="Gallery" 
          className="active-photo" 
          style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} 
        />
      </div>
      
      <button className={`prev ${activePhoto === 0 ? 'hide' : ''}`} onClick={handlePrev}>
        <img src={prev_icon} alt="Previous" />
      </button>
      
      <button className={`next ${activePhoto === photos.length - 1 ? 'hide' : ''}`} onClick={handleNext}>
        <img src={next_icon} alt="Next" />
      </button>
      
      <button className="close-gallery" onClick={() => setHideGallery(true)}>&times;</button>
    </div>
  );
};

export default GalleryPhotos;



