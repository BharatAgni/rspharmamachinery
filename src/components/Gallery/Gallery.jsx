import React from 'react'
import './Gallery.css'
import Title from '../Title/Title'
import gallery_1 from '../../assets/ointment-manufacturing.png'
import gallery_2 from '../../assets/liquid-oral-processing.png'
import gallery_3 from '../../assets/fluid-bed-dryer.png'
import gallery_4 from '../../assets/about-img-4.jpg'

const Gallery = ({setHideGallery}) => {
  return (
    <div className='gallery wrapper'>
      <Title title="Company Projects" titleText="Explore the collections of our company products pictures in company" />
      <div className="galleries">
        <div className="item">
          <img src={gallery_1} alt="" />
        </div>
        <div className="item">
          <img src={gallery_2} alt="" />
        </div>
        <div className="item">
          <img src={gallery_3} alt="" />
        </div>
        <div className="item">
          <img src={gallery_4} alt="" />
        </div>
      </div>
      <button className="btn" onClick={() => setHideGallery(false)}><span>More photos</span></button>
    </div>
  )
}

export default Gallery