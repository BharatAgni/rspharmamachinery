import React from 'react'
import './Presence.css'
import Title from '../Title/Title'
import Presence_img_1 from "../../assets/presence-img-1.png"
import Presence_img_2 from "../../assets/presence-img-2.png"
import Presence_img_3 from "../../assets/presence-img-3.png"
import Presence_img_4 from "../../assets/presence-img-4.png"
const Presence = () => {
  return (
    <div className='Presence-main wrapper'>
    <Title title="OUR INDUSTRY PRESENCE" />
    <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
  Our products are used in many industries such as:
</p>
<ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: "1.8" }}>
  <li>Pharmaceutical</li>
  <li>Chemical</li>
  <li>Food</li>
  <li>Textile</li>
  <li>Dairy</li>
  <li>Engineering</li>
  <li>Agro-Chemical</li>
</ul>

  
        <p style={{ color: "black", marginBottom: "20px", lineHeight: "1.5", padding: "20px", textAlign: "left" }}>
        <strong>RS PHARMA MACHINERY</strong> Group of Companies is a leading manufacturer and designer of machineries,  
    manufacturing plant in the state of <strong>Maharashtra – INDIA</strong>.  
    RS PHARMA MACHINERY is offering <strong>World-Class Equipment</strong> with <strong>German technology</strong> for  
    <strong> Bulk Drugs</strong>, <strong>Cosmetics & Food</strong>, Pharmaceuticals, Chemicals Industries.  
    Machinery is an added advantage of automatic processing & packaging machineries for  
    <strong>Dairy, Distilleries & Pesticides, Cosmetics & Breweries</strong>, etc.  
    Apart from this, the company also manufactures automatic machines for  
    <strong> Lube & Toiletries Packaging</strong>, <strong>Food & Edible Oil Packaging Machineries</strong>,  
    <strong>Ancillaries Packaging Equipments</strong> as per the international quality standards at cost-effective rates.
                </p>


                <p style={{ color: "black", marginBottom: "20px", lineHeight: "1.5", padding: "20px", textAlign: "left" }}>
                We design and manufacture high quality machines for pharmaceutical, nutraceutical and cosmetic industries worldwide. 
                Also We offered  API,Cosmetics, Beverages, Pharmaceutical ,Bulk Drug, Beverages, Chemicals, Edible Oil, Lubricants,
                 Dairy, Detergents, Pesticides ,Distilleries, Fertilizers, Food, Nutraceuticals, Paints, Lubricants , Pigments, Plastics 
                 including Liquid, Powder, Paste based manufacturing industries machineries and Equipments / Plant and Turnkey Solution 
                </p>
                <p style={{ padding: "20px", textAlign: "left"}}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in. 
                    Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa 
                    voluptates, aut similique voluptatum labore quasi.
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
                <span className='PRODUCTS-title'>Fluidized Bed Dryer (FBD)</span>
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
