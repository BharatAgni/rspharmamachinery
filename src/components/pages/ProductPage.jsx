import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ProductPage.css";

const ProductPage = () => {
    const { category, productId } = useParams();
    const product = productsData[category]?.[productId]; 
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return (
            <div className="not-found-container">
                <h2>Oops! Product Not Found</h2>
                <p>Looks like the product you are looking for doesn't exist or has been removed.</p>
                <Link to="/" className="back-home">🔙 Go Back to Home</Link>
            </div>
        );
    }

    // Modal close on click outside image
    const closeModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            setModalOpen(false);
        }
    };

    return (
        <div className="product-page">
            <div className="product-container">
    
                {/* ✅ Image & Title Container (Left Side) */}
                <div className="image-title-container">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image" 
                        onClick={() => setModalOpen(true)} 
                    />
                    <h2 className="product-title">{product.name}</h2>
                </div>
    
                {/* ✅ Key Features */}
                <div className="features-section">
                    <h3>Key Features:</h3>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}> {feature}</li>
                        ))}
                    </ul>
                </div>
    
               {/* ✅ Services */}
            <div className="services-section">
                <h3>🛠️ Services We Offer:</h3>
                <ul>
                    {product.services &&
                        Object.entries(product.services).map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                      ))
                         }
                        </ul>
                    </div>

    
                {/* ✅ Other Machinery */}
                <div className="other-machinery">
                    <h3>🔗Machine Equiped With:</h3>
                    <p>{product.alliedMachinery}</p>
                </div>
    
                {/* ✅ Specifications */}
                <div className="specifications-section">
                    <h3>Technical Specifications:</h3>
                    <ul>
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                        ))}
                    </ul>
                </div>
    
                {/* Image Modal */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content">
                            <button className="close-btn" onClick={() => setModalOpen(false)}>❌</button>
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ProductPage;


