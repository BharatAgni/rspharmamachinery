import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Presence from './components/Presence/Presence';
import About from './components/About/About';
import AboutUs from './components/AboutUs/AboutUs';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Gallery from './components/Gallery/Gallery';
import GalleryPhotos from './components/GalleryPhotos/GalleryPhotos';
import AboutDetails from './components/AboutDetails/AboutDetails';
import Title from './components/Title/Title';
import Clients from './components/Clients/Clients';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// import BlogPage from './components/BlogPage/BlogPage';

import DownloadPage from './components/DownloadPage/DownloadPage';
import Certifications from './components/Certifications/Certifications';
import ProductPage from './components/Productpage/ProductPage'; // ✅ No dot at the end




function App() {
  const [hideVideoPlayer, setHideVideoPlayer] = useState(true);
  const [hideGallery, setHideGallery] = useState(true);

  return (
    <Router>
      <div className="APP">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Presence />
                <About setHideVideoPlayer={setHideVideoPlayer} />
                <Gallery setHideGallery={setHideGallery} />
                <AboutDetails />
                <Title title="Industries" titleText="Explore More About Industries" />
                <Clients />
                <Testimonial />
                <ProductPage/>
                
              </>
            }
            />
          {/* <Route path="/BlogPage" element={<BlogPage/>} />  */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/DownloadPage" element={<DownloadPage />} />
          <Route path="/product/:productName" element={<ProductPage />} />



          {/* ✅ Fixed Product Pages Route */}
    
        </Routes>
        <Certifications/>
        <Footer />

        {/* ✅ Gallery & Video Player */}
        {!hideGallery && <GalleryPhotos hideGallery={hideGallery} setHideGallery={setHideGallery} />}
        <VideoPlayer hideVideoPlayer={hideVideoPlayer} setHideVideoPlayer={setHideVideoPlayer} />
      </div>
    </Router>
  );
}

export default App;









