import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css'; // Optional styling
import IMG1 from '../../assets/Ointment Manufacturing Plant 3.jpg'


const productPage = {
  "Ointment Manufacturing Plant": {
     name: "Ointment Manufacturing Plant",
  description: "This plant is used for the manufacturing of ointments, creams, gels, and lotions. It ensures efficient mixing, emulsification, and vacuum-based transfer for contamination-free and uniform output.",
  specifications: [
    { label: "Capacity", value: "5 kg to 1000 kg (batch wise)" },
    { label: "Material", value: "SS316 for contact parts" },
    { label: "Agitator Type", value: "Anchor type with scrapers" },
    { label: "Heating", value: "Steam or Electric Jacketed Vessel" },
    { label: "Vacuum System", value: "Included for de-aeration" },
    { label: "Homogenizer", value: "Inline / Bottom mounted" },
    { label: "Control Panel", value: "Digital with speed & temperature controls" },
  ],
    image: IMG1 // Add the image path
  },
  "Liquid Oral Processing plant": {
    name: "Liquid Oral Processing Plant",
    description: "Description of the Liquid Oral Processing Plant",
    specifications: [
      { label: "Capacity", value: "500 liters/day" },
      { label: "Power", value: "380V" },
    ],
    image: "/images/liquid-oral-processing-plant.jpg", // Add the image path
  },
  "Lifter": {
    name: "Lifter",
    description: "Lifting height: 1 to 6 meters.",
    specifications: [
      { label: "Lifting Capacity", value: "100 kg to 1000 kg" },
      { label: "Power", value: "Electric or manual" },
    ],
    image: "/images/lifter.jpg", // Add the image path
  },
  // Add more products here...
};

const ProductPage = () => {
  const { productName } = useParams();
  const product = productPage[decodeURIComponent(productName)];

  if (!product) {
    return <div>a</div>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <ul>
        {product.specifications.map((spec, index) => (
          <li key={index}>
            <strong>{spec.label}: </strong>{spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;