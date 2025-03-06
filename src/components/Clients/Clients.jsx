import React from 'react'
import './Clients.css'
import Client_img from '../../assets/about-img-1.png'
import company_img_2 from '../../assets/Pharmaceutical-IMG.png'
import company_img_3 from '../../assets/Chemicals-IMG.png'
import comapny_img_4 from '../../assets/COSMATICS-IMG.png'

const Clients = () => {
  return (
    <div className='Client'>
        <div className='img'>
        <img src={Client_img} alt='' />
        </div>
        <div className='attendess'>
            <div className='item'>
                <div className='img-ctn'>
                    <img src={company_img_2} alt="" />
                </div>
                <span>Pharmaceutical</span>
            </div>
            <div className='item'>
                <div className='img-ctn'>
                    <img src={company_img_3} alt="" />
                </div>
                <span>Chemicals</span>
            </div>
            <div className='item'>
                <div className='img-ctn'>
                    <img src={comapny_img_4} alt="" />
                </div>
                <span>COSMATICS</span>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default Clients
