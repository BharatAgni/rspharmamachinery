import React from 'react'
import './Presence.css'
import Title from '../Title/Title'
import neha_img from "../../assets/neha.jpg"
import bharat_img from "../../assets/bharat.jpg"
import bhupesh_img from "../../assets/bhupesh.jpg"
import rahul_img from "../../assets/rahul.jpg"
const Presence = () => {
  return (
    <div className='Presence-main wrapper'>
        <Title title = "OUR INDUSTRY PRESENCE" titleText="Our products are used in many industries such as:
Pharmaceutical
Chemical
Food
Textile
Dairy
Engineering
Agro-Chemical"/>
        <p style={{ color: "black", marginBottom: "20px", lineHeight: "1.5" }}>
        <strong>RS PHARMA MACHINERY</strong> Group of Companies is a leading manufacturer and designer of machineries,  
    manufacturing plant in the state of <strong>Gujarat – INDIA</strong>.  
    RS PHARMA MACHINERY is offering <strong>World-Class Equipment</strong> with <strong>German technology</strong> for  
    <strong> Bulk Drugs</strong>, <strong>Cosmetics & Food</strong>, Pharmaceuticals, Chemicals Industries.  
    Machinery is an added advantage of automatic processing & packaging machineries for  
    <strong>Dairy, Distilleries & Pesticides, Cosmetics & Breweries</strong>, etc.  
    Apart from this, the company also manufactures automatic machines for  
    <strong> Lube & Toiletries Packaging</strong>, <strong>Food & Edible Oil Packaging Machineries</strong>,  
    <strong>Ancillaries Packaging Equipments</strong> as per the international quality standards at cost-effective rates.
                </p>


                <p style={{ color: "black", marginBottom: "20px", lineHeight: "1.5", alignItems: "center" }}>
                We design and manufacture high quality machines for pharmaceutical, nutraceutical and cosmetic industries worldwide. 
                Also We offered  API,Cosmetics, Beverages, Pharmaceutical ,Bulk Drug, Beverages, Chemicals, Edible Oil, Lubricants,
                 Dairy, Detergents, Pesticides ,Distilleries, Fertilizers, Food, Nutraceuticals, Paints, Lubricants , Pigments, Plastics 
                 including Liquid, Powder, Paste based manufacturing industries machineries and Equipments / Plant and Turnkey Solution 
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in. 
                    Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa 
                    voluptates, aut similique voluptatum labore quasi.
                </p>
      <div className="Presence">
        <div className='PRODUCTS'>
            <img src={neha_img} alt='' />
            <div>
                <span className='PRODUCTS-title'>neha</span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={bharat_img} alt='' />
            <div>
                <span className='PRODUCTS-title'>bharat</span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={bhupesh_img} alt='' />
            <div>
                <span className='PRODUCTS-title'>bhupesh</span>
            </div>
        </div>
        <div className='PRODUCTS'>
            <img src={rahul_img} alt='' />
            <div>
                <span className='PRODUCTS-title'>rahul</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Presence
