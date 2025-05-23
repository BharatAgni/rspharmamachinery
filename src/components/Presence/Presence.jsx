import React from 'react'
import './Presence.css'
import { FaPills, FaFlask, FaUtensils, FaTshirt, FaCheese, FaCogs, FaSeedling } from "react-icons/fa";
import Title from '../Title/Title'
import Presence_img_1 from "../../assets/FLUIID BED PROCESSOR 1.png"
import Presence_img_2 from "../../assets/Rapid Mixer Granulator.jpg"
import Presence_img_3 from "../../assets/Ointment Manufacturing Plant 3.jpg"
import Presence_img_4 from "../../assets/VaccumeTray dryer.jpg"
const Presence = () => {
  return (
    <div className="Presence-main wrapper">
    <Title title="OUR INDUSTRY PRESENCE" className="title" />
    <ul className="industry-list">
      <li><FaPills /> Pharmaceutical</li>
      <li><FaFlask /> Chemical</li>
      <li><FaUtensils /> Food</li>
      <li><FaTshirt /> Textile</li>
      <li><FaCheese /> Dairy</li>
      <li><FaCogs /> Engineering</li>
      <li><FaSeedling /> Agro-Chemical</li>
    </ul>

  
        <p style={{ color: "black", marginBottom: "10px", lineHeight: "1.5", padding: "10px", textAlign: "left" }}>
        <strong>RS PHARMA MACHINERY</strong> Group of Companies is a leading manufacturer & design of machineries According to Specific requirement, our manufacturing unit in Vasai (E) Maharashtra – INDIA.
           </p>
                <p style={{ color: "black", marginBottom: "10px", lineHeight: "1.5", padding: "10px", textAlign: "left" }}>
                We design and manufacture high quality machines for pharmaceutical, nutraceutical and cosmetic industries worldwide. Also We offered API, Cosmetics, Beverages, Pharmaceutical ,Bulk Drug, Beverages, Chemicals, Edible Oil, Lubricants, Dairy, Detergents, Pesticides ,Distilleries, Fertilizers, Food, Nutraceuticals, Paints, Lubricants , Pigments, Plastics including Liquid, Powder, Paste based manufacturing industries machineries and Equipment’s / Plant and Turnkey Solutions.
                
                </p>
                <p style={{ padding: "10px", textAlign: "left"}}> 
                Our Machines is an added advantage of automatic processing & packaging Dairy, Distilleries & Pesticides, Cosmetics & Breweries, etc. Apart from this, the company also manufactures automatic machines for Lube & Toiletries Packaging, as per the international quality standards at cost-effective rates.
                </p>

                  <p style={{ padding: "10px", textAlign: "left"}}>  
                  We are using laser tech Cutting edge technology for High precision, For Bulk Drugs, Cosmetics & Food, Pharmaceuticals, Chemicals Industries.
                  </p>
      <div className="Presence">
        <div className='PRODUCTS'>
            <img src={Presence_img_1} alt='' />
            <div>
                <span className='PRODUCTS-title'> Fluidized Bed Dryer </span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={Presence_img_2} alt='' />
            <div>
                <span className='PRODUCTS-title'>Rapid Mixer Granulator (RMG)</span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={Presence_img_3} alt='' />
            <div>
                <span className='PRODUCTS-title'>Ointment Manufacturing Plant</span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={Presence_img_4} alt='' />
            <div>
                <span className='PRODUCTS-title'>Vacuum Tray Dryer (VTD)</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Presence
