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
        <div className="product-page">  {/* ✅ Background Change Ke Liye Class Add Ki */}
            <div className="product-container">
                <h1>{product.name}</h1>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image" 
                    onClick={() => setModalOpen(true)} // Open modal on click
                />
                <p>{product.description}</p>
                
                <h3>Features:</h3>
                <ul>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                {/* ✅ Specifications Section Added */}
                {product.specifications && (
                    <div className="specifications">
                        <h3>Specifications:</h3>
                        <ul>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key}><strong>{key}:</strong> {value}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* ✅ Modal for Fullscreen Image with Close Button */}
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
    );
};

export default ProductPage;


