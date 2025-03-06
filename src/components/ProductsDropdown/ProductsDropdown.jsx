import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductsDropdown.css";

const ProductsDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setShowDropdown(false);
                setActiveCategory(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleProductClick = (path) => {
        console.log("Navigating to:", path);
        navigate(path);
        setShowDropdown(false);
        setActiveCategory(null);
    };

    const categories = [
        {
            name: "Ointment & Liquid Section",
            products: [
                { name: "Ointment Manufacturing Plant", path: "/products/ointment-liquid/ointment-manufacturing-plant" },
                { name: "Liquid Oral Processing Plant", path: "/products/ointment-liquid/liquid-oral-processing-plant" },
                { name: "Manufacturing Vessels", path: "/products/ointment-liquid/manufacturing-vessels" },
                { name: "Storage Tanks", path: "/products/ointment-liquid/storage-tanks" },
                { name: "Sparkler Filter Press", path: "/products/ointment-liquid/sparkler-filter-press" }
            ]
        },
        {
            name: "Granulation/ Tablet Section",
            products: [
                { name: "Fluid bed Processor", path: "/products/granulation/fluid-bed-processor" },
                { name: "Power Transfer Technology", path: "/products/granulation/power-transfer-technology" },
                { name: "Rapid Mixture & Granulator", path: "/products/granulation/rapid-mixture-granulator" },
                { name: "Vibro-Shifter", path: "/products/granulation/vibro-shifter" },
                { name: "Multimill", path: "/products/granulation/multimill" },
                { name: "Co-Mill", path: "/products/granulation/co-mill" },
                { name: "Colloidal Mill", path: "/products/granulation/colloidal-mill" },
                { name: "Reactor", path: "/products/granulation/reactor" }
            ]
        },
        {
            name: "Drying / Processing Equipments",
            products: [
                { name: "Vacuum Tray Dryer", path: "/products/drying-processing/vacuum-tray-dryer" },
                { name: "Air Tray Dryer", path: "/products/drying-processing/air-tray-dryer" },
                { name: "Auto Coater", path: "/products/drying-processing/auto-coater" },
                { name: "Coating Pan", path: "/products/drying-processing/coating-pan" }
            ]
        },
        {
            name: "Others",
            products: [
                { name: "Lifter", path: "/products/others/lifter" },
                { name: "Stand Homogenizer", path: "/products/others/stand-homogenizer" },
                { name: "Platform & Staircase", path: "/products/others/platform-staircase" },
                { name: "Inline Homogenizer", path: "/products/others/inline-homogenizer" }
            ]
        }
    ];

    return (
        <li
            className={`dropdown ${showDropdown ? "active" : ""}`}
            onMouseEnter={() => !isMobile && setShowDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDropdown(false)}
            onClick={() => isMobile && setShowDropdown(prev => !prev)}
        >
            Products
            <ul className={`dropdown-menu ${showDropdown ? "open" : ""}`}>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`dropdown-category ${activeCategory === category.name ? "active" : ""}`}
                        onMouseEnter={() => !isMobile && setActiveCategory(category.name)}
                        onClick={(e) => {
                            if (isMobile) {
                                e.stopPropagation();
                                setActiveCategory(prev => prev === category.name ? null : category.name);
                            }
                        }}
                    >
                        {category.name}
                        <span className={`arrow ${activeCategory === category.name ? "rotate" : ""}`}>▶</span>
                        <ul className={`products-list ${activeCategory === category.name ? "visible" : ""}`}>
                            {category.products.map((product, idx) => (
                                <li key={idx} className="clickable-item" onClick={() => handleProductClick(product.path)}>
                                    <Link
                                        to={product.path}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default ProductsDropdown;






