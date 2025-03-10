import React from 'react'
import './Gallery.css'
import Title from '../Title/Title'
import gallery_1 from '../../assets/Gallery-IMG-1.png'
import gallery_2 from '../../assets/FLUIID BED PROCESSOR 1.png'
import gallery_3 from '../../assets/colidal mill 1.png'
import gallery_4 from '../../assets/Gallery-IMG-4.png'

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