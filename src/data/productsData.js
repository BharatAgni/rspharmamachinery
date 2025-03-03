import ointment_manufacturing from "../assets/ointment-manufacturing.png";
import liquid_oral_processing from "../assets/liquid-oral-processing.png";
import Manufacturing_Vessels from "../assets/Manufacturing-Vessels.png";
import storage_tanks from "../assets/storage-tanks.png";
import sparkler_filter_press from "../assets/sparkler-filter-press.png";
// import fluid_bed_processor from "../assets/fluid-bed-processor.png"; // Add missing image imports
// import rapid_mixture_granulator from "../assets/rapid-mixture-granulator.png";
// import vibro_shifter from "../assets/vibro-shifter.png";
// import multimill from "../assets/multimill.png";
// import co_mill from "../assets/co-mill.png";
// import colloidal_mill from "../assets/colloidal-mill.png";
// import power_transfer_technology from "../assets/power-transfer-technology.png";
// import reactor from "../assets/reactor.png";

const products = {
    "ointment-liquid": {
        "ointment-manufacturing-plant": {
            name: "Ointment Manufacturing Plant",
            image: ointment_manufacturing,
            description: "Ointment Manufacturing Plant is designed for the production of ointments, creams, lotions, and gels in pharmaceutical and cosmetic industries. It ensures high efficiency and GMP compliance for quality manufacturing.",
            features: [
                "High-grade stainless steel construction (SS 316/SS 304/SS 316L)",
                "Efficient homogenizing and emulsifying system with inbuilt or inline homogenizer",
                "Vacuum processing to avoid air entrapment",
                "CIP (Clean-in-Place) system for easy cleaning",
                "Available in different capacities to suit production needs",
                "Vessel design as per ASME guidelines",
                "Seamless pipe fittings with electro-polished tri-clover joints",
                "Semi contra rotary anchor type agitator with open slot scraper design",
                "Pre-Mix vessels with top/bottom stirrer",
                "Safety interlocks for enhanced protection",
                "Fully automatic operation with centralized operating panel"
            ],
            specifications: {
                capacity: "50 - 1000 kg/batch",
                power: "5 - 20 kW",
                material: "SS 304 / SS 316 / SS 316L",
                automation: "Semi & Fully Automatic",
            }
        },
        "liquid-oral-processing-plant": {
            name: "Liquid Oral Processing Plant",
            image: liquid_oral_processing,
            description: "The Liquid Oral Processing Plant is used for the production of syrups, suspensions, and oral liquids with efficient mixing, heating, and homogenizing.",
            features: [
                "Modular design with integrated process controls",
                "SS 316 tanks with heating and cooling jackets",
                "Efficient homogenization and mixing",
                "Sanitary piping with CIP & SIP system",
                "Complies with FDA, cGMP, and WHO standards"
            ],
            specifications: {
                capacity: "100 - 5000 L",
                power: "10 - 50 kW",
                material: "SS 316",
                automation: "PLC based control"
            }
        },
        "manufacturing-vessels": {
            name: "Manufacturing Vessels",
            image: Manufacturing_Vessels,
            description: "Manufacturing Vessels are used for storage and preparation of pharmaceutical and food-grade liquids and semi-solids.",
            features: [
                "Constructed with SS 316/SS 304 for hygiene",
                "Jacketed vessels for temperature control",
                "Agitators and stirrers for proper mixing",
                "Pressure and vacuum compatibility",
                "Customizable sizes and capacities"
            ],
            specifications: {
                capacity: "100 - 10,000 L",
                material: "SS 304 / SS 316",
                temperatureRange: "0 - 150°C"
            }
        },
        "storage-tanks": {
            name: "Storage Tanks",
            image: storage_tanks,
            description: "Storage Tanks are designed for safe storage of raw materials, finished products, and intermediates in pharmaceutical and food industries.",
            features: [
                "Available in vertical and horizontal configurations",
                "SS 316/SS 304 construction for durability",
                "Leak-proof design with sanitary fittings",
                "Pressure and vacuum-resistant options",
                "Custom sizes available"
            ],
            specifications: {
                capacity: "500 - 50,000 L",
                material: "SS 304 / SS 316",
                type: "Jacketed / Non-Jacketed"
            }
        },
        "sparkler-filter-press": {
            name: "Sparkler Filter Press",
            image: sparkler_filter_press,
            description: "Sparkler Filter Press is used for filtration of liquid products like syrups, suspensions, and emulsions in pharmaceutical and chemical industries.",
            features: [
                "High-efficiency filtration with uniform flow",
                "SS 316/SS 304 filter plates and body",
                "Leak-proof and easy to clean design",
                "Available in different plate sizes and capacities",
                "Ideal for pharmaceutical, food, and chemical industries"
            ],
            specifications: {
                capacity: "10 - 5000 L/hr",
                material: "SS 304 / SS 316",
                plateSize: "8” - 24”",
                pressure: "Up to 5 bar"
            }
        }
    },

    "granulation": {
        "fluid-bed-processor": {
            name: "Fluid Bed Processor",
            // image: fluid_bed_processor, // Added image
            description: "Fluid Bed Processor is used for drying, granulation, and coating of pharmaceutical powders and granules.",
            features: [
                "Efficient air distribution system for uniform drying",
                "Automatic process controls with PLC system",
                "High-quality SS 316 construction",
                "Energy-efficient heating system",
                "Suitable for batch and continuous processing"
            ],
            specifications: {
                capacity: "10 - 500 kg/batch",
                power: "5 - 30 kW",
                material: "SS 304 / SS 316",
                automation: "Fully Automatic"
            }
        },
        "rapid-mixture-granulator": {
            name: "Rapid Mixture Granulator",
            // image: rapid_mixture_granulator, // Added image
            description: "Rapid Mixture Granulator ensures fast and efficient wet granulation process in pharmaceutical manufacturing.",
            features: [
                "High-speed mixing and granulating",
                "SS 316 contact parts for hygiene",
                "Advanced impeller and chopper design",
                "Variable speed control for optimized granulation",
                "Easy-to-clean and GMP compliant design"
            ],
            specifications: {
                capacity: "25 - 1200 L",
                power: "5 - 50 kW",
                material: "SS 304 / SS 316",
                automation: "PLC / HMI based control"
            }
        },
        "vibro-shifter": {
            name: "Vibro Shifter",
            // image: vibro_shifter, // Added image
            description: "Vibro Shifter is used for particle size separation in pharmaceutical, food, and chemical industries.",
            features: [
                "Multi-deck screening for efficient separation",
                "GMP compliant stainless steel design",
                "Low noise and vibration operation",
                "Easy screen changing and maintenance",
                "Available in different mesh sizes"
            ],
            specifications: {
                capacity: "100 - 5000 kg/hr",
                power: "0.5 - 5 kW",
                material: "SS 304 / SS 316",
                screenSize: "Up to 200 mesh"
            }
        },
        "multimill": {
            name: "Multimill",
            // image: multimill, // Added image
            description: "Multimill is used for granulation, pulverization, and size reduction in pharmaceutical and chemical industries.",
            features: [
                "High-speed and uniform granulation",
                "Stainless steel contact parts for hygiene",
                "Interchangeable screens for different particle sizes",
                "Compact and GMP compliant design",
                "Low noise and easy maintenance"
            ],
            specifications: {
                capacity: "50 - 500 kg/hr",
                power: "2 - 7.5 kW",
                material: "SS 304 / SS 316"
            }
        },
        "co-mill": {
            name: "Co-Mill",
            // image: co_mill, // Added image
            description: "Co-Mill is used for size reduction, de-lumping, and milling applications in pharmaceutical industries.",
            features: [
                "Uniform particle size distribution",
                "Low heat generation and dust-free operation",
                "Interchangeable screens and impellers",
                "Easy cleaning and maintenance",
                "Complies with GMP standards"
            ],
            specifications: {
                capacity: "50 - 1000 kg/hr",
                power: "2 - 10 kW",
                material: "SS 304 / SS 316"
            }
        },
        "colloidal-mill": {
            name: "Colloidal Mill",
            // image: colloidal_mill, // Added image
            description: "Colloidal Mill is used for homogenizing, emulsifying, and fine grinding of liquid and semi-solid products.",
            features: [
                "High shear mixing for fine particle reduction",
                "SS 316 construction for hygiene",
                "Adjustable rotor and stator gap",
                "Cooling system for heat-sensitive materials",
                "Suitable for pharmaceutical, food, and cosmetic applications"
            ],
            specifications: {
                capacity: "10 - 5000 L/hr",
                power: "1 - 15 kW",
                material: "SS 304 / SS 316"
            }
        },
        "power-transfer-technology": {
            name: "Power Transfer Technology",
            // image: power_transfer_technology, // Added image
            description: "Power Transfer Technology is used for safe and efficient material transfer in pharmaceutical manufacturing.",
            features: [
                "Dust-free and contamination-free transfer",
                "Vacuum and pressure-based transfer systems",
                "GMP compliant design",
                "Customizable based on production needs",
                "Easy to clean and maintain"
            ],
            specifications: {
                type: "Vacuum / Pressure",
                capacity: "Customized",
                material: "SS 304 / SS 316"
            }
        },
        "reactor": { // Fixed typo in key
            name: "Reactor",
            // image: reactor, // Added image
            description: "Reactors are used for mixing, heating, and chemical reactions in pharmaceutical and chemical industries.",
            features: [
                "Jacketed vessels for temperature control",
                "High-quality SS 316 construction",
                "Agitators and stirrers for uniform mixing",
                "Pressure and vacuum resistant",
                "Available in different capacities"
            ],
            specifications: {
                capacity: "50 - 10,000 L",
                material: "SS 304 / SS 316",
                temperatureRange: "0 - 250°C",
                pressure: "Up to 10 bar"
            }
        }
    }
};

export default products;


