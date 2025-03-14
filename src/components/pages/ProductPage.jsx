import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ProductPage.css";

const ProductPage = () => {
    const { category, productId } = useParams();
    const product = productsData[category]?.[productId]; 
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    // Auto Shuffle Images Every 3s
    useEffect(() => {
        if (!product?.gallery?.length) return;
    
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % product.gallery.length);
        }, 3000);
    
        return () => clearInterval(interval);
    }, [product?.gallery]);
    
    if (!product) {
        return (
            <div className="not-found-container">
                <h2>Oops! Product Not Found</h2>
                <p>Looks like the product you are looking for doesn't exist or has been removed.</p>
                <Link to="/" className="back-home">🔙 Go Back to Home</Link>
            </div>
        );
    }

    // Modal Open Function
    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
        setModalOpen(true);
    };

    // Modal Close Function
    const closeModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            setModalOpen(false);
        }
    };

    return (
        <div className="product-page">
            <div className="product-container">
                <div className="image-title-container">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image" 
                        onClick={() => openModal(product.image)} 
                    />
                    <h2 className="product-title">{product.name}</h2>
                </div>

                <div className="features-section">
                    <h3>Key Features:</h3>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

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

                <div className="specifications-section">
                    <h3>Technical Specifications:</h3>
                    <ul>
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong>
                                {typeof value === "object" ? (
                                    <ul>
                                        {Object.entries(value).map(([subKey, subValue]) => (
                                            <li key={subKey}><strong>{subKey}:</strong> {subValue}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    ` ${value}`
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="other-machinery">
                    <h3>🔗 Machine Equipped With:</h3>
                    <ul>
                        {product.other &&
                            Object.entries(product.other).map(([key, value]) => (
                                <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</li>
                            ))
                        }
                    </ul>
                </div>
    
                {product.gallery && product.gallery.length > 0 && (
                    <div className="image-gallery">
                        <h3>📷 More Images:</h3>
                        <div className="gallery-box" onClick={() => openModal(product.gallery[currentImage])}>
                        <img 
                            src={product.gallery[currentImage]} 
                            alt="Product showcase" 
                            className="gallery-image" 
                        />

                        </div>
                    </div>
                )}
    
                {isModalOpen && modalImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content">
                            <button className="close-btn" onClick={() => setModalOpen(false)}>❌</button>
                            <div className="modal-image-wrapper">
                            <img src={modalImage} alt="Product View" />

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
