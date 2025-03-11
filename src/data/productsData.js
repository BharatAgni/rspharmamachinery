import ointment_manufacturing from "../assets/ointment-plant.jpg";
import liquid_oral_processing from "../assets/liquid-oral-processing.png";
// import Manufacturing_Vessels from "../assets/Manufacturing-Vessels.png";
// import storage_tanks from "../assets/storage-tanks.png";
import sparkler_filter_press from "../assets/sparkler-filter-press.png";
import colloidal_mill from "../assets/colidal mill 1.png"
import coating_pan from "../assets/COATING PAN.jpg"
import multimill from "../assets/miltimill.jpg"
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
                <strong>Main Vessel:</strong>,
                "Choice of various type of anchor design.",
                " Homogeniser (option) Top Entry, side Entry, Bottom Entry with circulation facility",
                " Hydraulic lid lifting for fast & easy cleaning of top dish & vessel.",
                "Load Cell for fast & accurate measuring system.",
                " Flexible product transfer pipe & fitting in case of load cell & hydraulic lifting.",
                " VFD for Anchor agitators to vary the RPM.",
                " VFD for Homogeniser to vary RPM.",
                "Specially Design drive assembly.",
                <strong>Wax Vessel:</strong>,
                "Open top with top Entry agitator Cowl disc type or paddle with Slow Speed Anchor.",
                "Close top with top/bottom entry agitator Cowl disc type or propeller type stirrer.",
                <strong>Water Vessel:</strong>,
                "Open top with top entry propeller stirrer",
                "Close top with bottom or top entry propeller",
                <strong>DesignBase:</strong>,
                "A Special pharmaceutical design enables application in biotechnical process. Material surface as well as general design are in keeping with the GMP directives as well as the recommendations of the FDA & USFDA.",
                "Vessel design as per ASME guideline and tailor made design as per users / product Requirements.",
                "All vessel are per GMP regulations.",
                "Total plant is design & supplied as per CGMP guidelines"
            ],
            specifications: {
     capacity: "5-5000kg",
    cosmeticsToiletries: "Creams, lotions, wax, mascara, gels, toothpaste",
    pharmaceuticals: "Ointments, dental composite, syrup, injections",
    food: "Mayonnaise, dressings, jam, butter, margarines, wasabi",
    chemicals: "Polyester, synthetic fibers, shoe creams"


            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
           
        },
        "liquid-oral-processing-plant": {
            name: "Liquid Oral Processing Plant",
            image: liquid_oral_processing,
            description: "The Liquid Oral Processing Plant is used for the production of syrups, suspensions, and oral liquids with efficient mixing, heating, and homogenizing.",
            features: [
                "This system consists of a closed-circuit manufacturing facility from feeding of Sugar / Water Phase to loading the Liquid",
                "Filling Machine.",
                "The Sugar and Water are loaded with vacuum system or by mechanical system or manually.",
                "Sugar syrup and manufacturing vessels are provided with limpet coils for heating and cooling, designed for internal vacuum to facilitate transfer of sugar directly from stores to sugar syrup vessel (In bigger size model).",
                "Sugar syrup is transferred to manufacturing vessel through online sugar syrup prefilter by vacuum or by transfer pump.",
                "The product during emulsion formation is recalculated through In-Line Homogenizer or Liquid Transfer Pump. (Optional Facility)",
                "The Pump also discharges the product in the Storage Vessel.",
                "The Storage Vessel is then taken to the filling area (if it is small capacity) and is connected to again Liquid Transfer.",
                "The advantage of the bottom propeller agitator over the conventional agitators is that there are no vibrations of shaft, no coupling in the drive assembly, leading to lower maintenance cost.",
                "Pump or Storage Vessel remains fixed (In bigger size) & pump transfers the Liquids in the float tank which is connected with filling machine.",
                "Entry of all propeller agitations are from bottom through a specially designed mechanical seal face"
                      ],
            specifications: {
                        capacity: "100-10000 ltr",
                        sugarMeltingVessel: "Sugar Melting Vessel",
                        preFiltrationUnit: "Pre-filtration unit",
                        syrupManufacturingVessel: "Syrup Manufacturing Vessel",
                        filtrationUnit: "Filtration unit",
                        storageVessel: "Storage Vessel",
                        controlPanel: "Control Panel",
                        productPiping: "Product Piping",
                    workingPlatform: "Working Platform"
                    },

                    services: {
                        description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                        commissioning: "Ensuring equipment is tested and fully operational.",
                        validation: "GMP & FDA-compliant validation services.",
                        maintenance: "Annual maintenance contracts (AMC) available.",
                        support: "24/7 customer support for troubleshooting and assistance."
                    }
        },
        "manufacturing-vessels": {
            name: "Manufacturing Vessels",
            // image: Manufacturing_Vessels,
            description: "Manufacturing Vessels are used for storage and preparation of pharmaceutical and food-grade liquids and semi-solids.",
            features: [
                <strong>Types of Manufacturing Vessels:</strong> ,
                "Pressure Vessels: Used for storing gases or liquids under pressure (e.g., gas cylinders, steam boilers).",
                "Storage Tanks: For storing liquids, slurries, or gases at normal pressure (e.g., oil tanks, water storage tanks).",
                "Mixing Vessels: For blending or mixing ingredients in manufacturing processes (e.g., food processing, pharmaceuticals).",
                "Heat Exchanger Vessels: Transfer heat between two or more fluids, such as in HVAC systems, industrial manufacturing, and power plants.",
                <strong>Safety Features:</strong>,
                "Pressure Relief Valves: Designed to release pressure if it exceeds safe levels.",
                "Safety Margins: Pressure and temperature ratings are often designed with safety margins that account for operational variations and unforeseen stress.",
                "Explosion Proof Design: Certain vessels, particularly in the chemical industry, may require explosion-proof designs and additional structural reinforcement.",
                "Insulation and Thermal Management:",
                "Vessels that deal with high-temperature processes may include insulation or thermal jackets to maintain desired temperatures or prevent heat loss.",
                "Thermal Expansion: Vessels must account for changes in size due to temperature variations, often requiring expansion joints or flexible fittings.",
                <strong> Manufacturing Codes and Standards:</strong>,
                "The design, construction, and testing of manufacturing vessels are governed by specific codes and standards, such as:",
                "ASME (American Society of Mechanical Engineers): Provides standards for pressure vessels (e.g., ASME Boiler and Pressure Vessel Code).",
                "API (American Petroleum Institute): Standards for petroleum-related vessels.",
                "ISO (International Organization for Standardization): Sets guidelines for manufacturing quality and material specifications.",
                "PED (Pressure Equipment Directive): In the EU, this governs the safety of pressure equipment.",
                <strong> Manufacturing Process:</strong>,
                "Fabrication: The fabrication of manufacturing vessels typically involves forming metal sheets into the desired shape (rolling, stamping, or spinning) and welding them together.",
                "Machining: Parts like flanges, valve seats, or inspection ports may need to be machined to precise dimensions.",
                "Heat Treatment: To improve the material’s strength or hardness, heat treatment processes like annealing, tempering, or quenching may be employed.",
                "Testing: Vessels often undergo various tests to ensure structural integrity and compliance with standards. Common tests include:", 
                "Hydrostatic Testing: The vessel is filled with water and pressurized to ensure it can withstand operating pressures.",
                "Ultrasonic Testing: Used for inspecting the vessel's wall thickness and identifying any defects.",
                "Radiographic Testing: X-rays are used to inspect the internal welds and joints."
            ],
            specifications: {
                capacity: "100 - 10,000 L",
                material: "SS 304 / SS 316",
                temperatureRange: "0 - 150°C"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },
        // "storage-tanks": {
        //     name: "Storage Tanks",
        //     image: storage_tanks,
        //     description: "Storage Tanks are designed for safe storage of raw materials, finished products, and intermediates in pharmaceutical and food industries.",
        //     features: [
                 

        //     ],
        //     specifications: {
        //         capacity: "500 - 50,000 L",
        //         material: "SS 304 / SS 316",
        //         type: "Jacketed / Non-Jacketed"
        //     },
        //     services: {
        //         description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
        //         commissioning: "Ensuring equipment is tested and fully operational.",
        //         validation: "GMP & FDA-compliant validation services.",
        //         maintenance: "Annual maintenance contracts (AMC) available.",
        //         support: "24/7 customer support for troubleshooting and assistance."
        //     }
        // },
        "sparkler-filter-press": {
            name: "Sparkler Filter Press",
            image: sparkler_filter_press,
            description: "Sparkler Filter Press is used for filtration of liquid products like syrups, suspensions, and emulsions in pharmaceutical and chemical industries.",
            features: [
                <strong> Applications:</strong>,
                "Pharmaceutical: For sterile filtration of liquids, such as in vaccine production or IV fluids.",
                "Food & Beverage: For filtration of fruit juices, wine, beer, syrups, and oils.",
                "Chemical: For filtration of chemicals, solvents, and other process liquids.",
                "Cosmetics: For clarification of lotions, creams, and oils.",
                "Water Treatment: For removing suspended solids in water and wastewater."
            ],
                        specifications: {
                commonDetails: "Here are the common technical details for Sparkler Filter Presses:",
                capacityFlowRate: "From 10 to 1000+ liters per minute",
                filtrationArea: "-0.5 m² to over 50 m².",
                plateDimensions: "Range 300 mm x 300 mm to 1200 mm x 1200 mm",
                materialOfPlates: "304,316,316L",
                type: "Filter paper, polypropylene fabric",
                micronRating: "1 micron to 100 microns",
                operatingPressure: "2-6 bar (30-90 psi) to 10 bar (145 psi)",
                maximumPressure: "8-10 bar"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        }
    },

    "granulation": {
        "fluid-bed-processor": {
            name: "Fluid Bed Processor",
            // image: fluid_bed_processor, // Added image
            description: "Fluid Bed Processor is used for drying, granulation, and coating of pharmaceutical powders and granules.",
            features: [
                    "The process unit is single pieces welded design, made of stainless steel of SS.",
                    "All process contact parts are made of SS – 316.",
                    "The finish employed externally will be all welds ground back and polished into the surrounding materials.",
                    "All of the external surfaces of the Dryer and all non contact/sight parts will prepared with a uniform fine texture matt finish.",
                    "The entire product contact surface is mirror finished.",
                    "Particular attention has been paid to reduce any source of material Entrapment by mirror polishing flush all welds to create crevice free profiles both internally and externally.",
                    "The expansion chamber containing the filter finger bags & dished end are made of single piece construction from SS 316 quality steel. Below that is the retarding chamber made out of S.S. 316 Retarding chamber is locked with the explosion chamber by means of clamps. The length of the retarding chamber is such designed , thereby providing extra large heat exchange are which exposed each and every particle or the charged batch in the",
                    "Fluidized air resulting in instant drying.",
                    "Specially designed base is provided for air vortex effect and to give added strength.",
                    "A central drain is provided in the base to release wash water.",
                    "FLUID BED DRYER – BOWL/ PRO DUCT CONTAINER:",
                    "Product bowl is a conical shaped manufactured form SS-316 grade stainless steel having stainless steel mesh support along with fine finish air mesh.",
                    "The product container Trolley is of Tubular construction made form SS-304 pipe mounted on polypropylene castor wheel (2nos fixed & 2nos. Swivel for manoeuvrability) which imparts rigidity to carry the product container with the charged load.",
                    "The batch loading capacity is always higher in case of “R S PHARMA” Fluid Bed dryer, because of better fluidisation by varying the frequent shaking of the finger bags. Shaking period vary depending on the nature of products.",

            ],
            specifications: {
                capacity: "5 - 500 kg/batch",
                power: "5 - 30 kW",
                material: "SS 304 / SS 316",
                automation: "Fully Automatic"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },

        "power-transfer-technology": {
            name: "Power Transfer Technology",
            // image: power_transfer_technology, // Added image
            description: "Power Transfer Technology is used for safe and efficient material transfer in pharmaceutical manufacturing.",
            features: [
                "Vacuum Powder Transfer Systems",
                "Working Principle: Vacuum powder transfer systems utilize vacuum suction to convey powders through a series of pipes. These systems create negative pressure to move powder from one area to another.",
                "Components:",
                "Vacuum Pump: Creates the necessary suction force.",
                "Hopper or Feeding Unit: Holds and releases the powder into the vacuum line.",
                "Collection Cyclones: Separate the powder from the air before returning the air into the system."
            ],
            specifications: {
                type: "Vacuum / Pressure",
                capacity: "100 kg/hr to several tons/hr,",
                material: "SS 304 / SS 316"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },
        "rapid-mixture-granulator": {
            name: "Rapid Mixture Granulator",
            // image: rapid_mixture_granulator, // Added image
            description: "Rapid Mixture Granulator ensures fast and efficient wet granulation process in pharmaceutical manufacturing.",
            features: [
                "Suitable for dry mixing of products in granule form.",
                "Easy for loading and unloading of material.",
                "Easy for cleaning.",
                "All contact parts are made out of SS 304 / SS 316 or SS 316 L quality material, as per customer requirement.",
                "The octagonal shape & slow speed of rotating gives sufficient continuous movement to the granules result in good quality.",
                "Simple design requires minimum maintenance.",
                "General structure & safety guards made out of mild steel & coloured in Standard Model and made out of SS 304 & polished to the matt finish in GMP Model.",
                "Maximum care has been taken to ensure safe operation of the unit.",
                "Manual rotating facility with hand wheel for inching.",
                "Bigger size batch at low power consumption.",
                <strong>Other Option Available:</strong>,
                "Contact parts made out of SS316 instead of SS304.",
                "Flame proof drive motor along with flame proof starter.",
                "Vacuum Loading facility for material charging.",
                "Cylindrical container with cone for material charging.",
                <strong>Description:</strong>,
                "Mixing Bowl & Cover: S.S. 304 bowl design in three sections i.e. Flat bottom, Cylindrical mid portion and conical top portion for efficient mixing operation & provided with counter balanced lid. Lid provided with vents, view ports & charging openings.",
                "Main Impeller & Drive: The main impeller consists of dual speed 750/5000 synchronous dual HP TEFC motor, coupled through a belt drive to a worm reduction gearbox with chain coupling. The impeller is designed to provide mixing at the bottom and at the centre of the bowl and is driven through a specially designed bearing housing that facilities inside wash facility for quick change over and also prevents leakage of powder from bottom entry and leads to longer life of gear box.",
                "Chopper: The chopper drive consists of dual HP Dual speed (1440/2800 synchronous speed) TEFC MOTOR. The motor shaft is of S.S. and the chopper has specially designed 4 blades S.S. Impeller. The shaft is integral with the motor. The assembly mounted horizontally into the bowl.",
                "Discharge Port: The discharge port is mounted horizontally into the bowl with vertical downward opening. The opening is operated by pneumatic cylinder and discharged can be regulated for required opening.",
                "Mounting: A sturdy M.S. channel frame is used to house the drive assembly at the bottom. The bowl is mounted on the top. A S.S. staircase and railings are provided for the platform. The platform is half covered with S.S, dimpled plates. For safe movement of operator and the area under the bowl is covered with S.S.The entire body is covered from the sides by suitable S.S. covers.",
                "Main Panel: Main panel consists of all rewired connections and it has only to be connected to the electrical supply. The circuits consist of MCCB and the relay. Wires coming our of the connections are numbered for easy recognition.",
                "NOTE: For RMG 25, which is a lab model working platform, staircase and railing is not provided. The operators can access the machine from the ground level of the machine. Also the entire mounting is covered with S.S",
                "Technical Details:"
            ],
            specifications: {
            capacity: "10 - 1200 Ltrs",
            cGMPModelAndDesign: "As per ASME guidelines",
            MOC: "SS304 / SS316 / SS316L",
            hydraulicallyOperatedLidLifting: "Yes",
            detachableImpellerAndChopper: "Yes",
            qualificationDocuments: "IQ, DQ, OQ and FAT Protocol"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
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
                capacityAndThroughput: {
                    capacity: "50 kg/hr to 5000 kg/hr",
                    separationEfficiency: "20 microns to 10 mm"
                },
                vibratingMotorSpecifications: {
                    vibrationFrequency: "1440 to 2880 vibrations per minute (VPM)",
                    amplitude: "2 mm to 10 mm"
                },
                screenDeckAndMesh: {
                    meshSize: "20 mesh to 400 mesh"
                },
                vibrationIntensity: {
                    amplitudeRange: "2 mm to 10 mm",
                    frequencyRange: "1440 to 2880 vibrations per minute (VPM)"
                },
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },
        "multimill": {
            name: "Multimill",
            image: multimill, // Added image
            description: "Multimill is used for granulation, pulverization, and size reduction in pharmaceutical and chemical industries.",
            features: [
                "High-speed and uniform granulation",
                "Stainless steel contact parts for hygiene",
                "Interchangeable screens for different particle sizes",
                "Compact and GMP compliant design",
                "Low noise and easy maintenance"
            ],
            specifications: {
                capacityAndThroughput: {
                    capacity: "50 kg/hr to 2000 kg/hr",
                    feedSize: "20 mm"
                },
                workingPrinciple: "Impact, Shearing, Size Reduction",
                screenAndMeshSpecifications: {
                    meshSize: "0.5 mm to 10 mm",
                    screenType: "Perforated mesh or woven wire mesh"
                },
                rotorAndBlades: {
                    rotorSpeed: "2800 RPM to 3600 RPM"
                }
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
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
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },
        
        "colloidal-mill": {
            name: "Colloidal Mill",
            image: colloidal_mill, // Added image
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
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },
        
        "reactor": { // Fixed typo in key
            name: "Reactor",
            // image: reactor, // Added image
            description: "Reactor are used for mixing, heating, and chemical reactions in pharmaceutical and chemical industries.",
            features: [
                "Jacketed vessels for temperature control",
                "High-quality SS 316 construction",
                "Agitators and stirrers for uniform mixing",
                "Pressure and vacuum resistant",
                "Available in different capacities",
                <storng>Types of Reactors:</storng> ,
                "Batch Reactor",
                "Continuous Reactor",
                "Semi-batch Reactor",
                "Fixed-Bed Reactor",
                "Fluidized-Bed Reactor",
                "Design Pressure and Temperature:",
                "Operating Pressure: atmospheric pressure to several hundred bars",
                "Temperature Range: ambient temperature up to 500°C or more"
                            ],
            specifications: {
                capacity: "50 - 10,000 L",
                material: "SS 304 / SS 316",
                temperatureRange: "0 - 250°C",
                pressure: "Up to 10 bar"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        }
    },

    "drying-processing": {
        "vacuum-tray-dryer": {
            name: "Vacuum Tray Dryer",
            // image: vacuum_tray_dryer, // Added image
            description: "Vacuum Tray Dryer is used for drying heat-sensitive materials under vacuum conditions in pharmaceutical and chemical industries.",
            features: [
                "Low-temperature drying for sensitive products",
                "Uniform drying with shelf heating system",
                "SS 316 construction for hygiene",
                "Digital temperature and vacuum controls",
                "Available in different tray sizes and capacities"
            ],
            specifications: {
                capacity: "6 - 96 trays",
                temperatureRange: "Up to 120°C",
                vacuum: "0.1 to 1 bar",
                material: "Stainless steel construction (SS304/SS316)",
                powerSupply: "Electric heating, optional steam",
                controls: "Digital temperature & vacuum controllers"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },

        "air-tray-dryer": {
            name: "Air Tray Dryer",
            // image: air_tray_dryer, // Added image
            description: "Air Tray Dryer is used for drying of granules, powders, and food products in pharmaceutical and food industries.",
            features: [
                "Uniform drying with hot air circulation",
                "Adjustable temperature and humidity controls",
                "SS 304 / SS 316 construction",
                "Digital timers and temperature displays",
                "Available in different tray sizes and capacities",
                "Agriculture"
            ],
            specifications: {
                capacity: "6 - 96 trays",
                temperature: "30 - 100°C",
                material: "SS 304 / SS 316",
                airflow: "1000 - 5000 CFM"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }

        },

        "auto-coater":{
            name: "Auto Coater",
            // image: auto_coater, // Added image
            description: "Auto Coater is used for coating tablets, pills, and granules with a uniform and controlled coating layer.",
            features: [
                "Perforated coating pan for efficient coating",
                "PLC-based controls for automatic operation",
                "Stainless steel construction for hygiene",
                "Inlet air filtration system",
                "Variable speed control for coating process"
            ],
            specifications: {
                capacity: "10 - 500 kg/batch",
                temperatureRange: "30°C to 60°C",
                speed: "10-50 RPM",
                material: "Stainless steel (SS304/SS316)",
                control: "PLC with touchscreen interface for process monitoring",
                power: "Electric or steam-heated options"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },

        "coating-pan":{
            name: "Coating Pan",
            image: coating_pan, // Added image
            description: "Coating Pan is used for sugar coating, film coating, and polishing of tablets and pills in pharmaceutical production.",
            features: [
                "Perforated and non-perforated pans available",
                "Stainless steel construction for durability",
                "Variable speed control for coating process",
                "Easy loading and unloading of tablets",
                "Available in different batch capacities",
                <strong> Applications: </strong>,
                "Tablet and capsule coating in pharmaceuticals, food processing, and nutraceuticals"
            ],
            specifications: {
                capacity: "5 - 100 kg/batch",
                Material: "Stainless steel (SS304/SS316)",
                Speed: "10-30 RPM",
                temperatureRange: "Up to 90°C",
                Heating: "Electric or steam heating",
                Control: "Manual or automatic with speed and temperature control"
            },
            services: {
                description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                commissioning: "Ensuring equipment is tested and fully operational.",
                validation: "GMP & FDA-compliant validation services.",
                maintenance: "Annual maintenance contracts (AMC) available.",
                support: "24/7 customer support for troubleshooting and assistance."
            }
        },

    },

        "others":{
            "stand-homogenizer":{
                name: "Stand Homogenizer",
                // image: stand_homogenizer, // Added image
                description: "Stand Homogenizer is used for high-speed mixing, emulsifying, and homogenizing of liquid products in pharmaceutical and food industries.",
                features: [
                    "High-speed rotor-stator design for efficient mixing",
                    "Adjustable speed controls for different applications",
                    "Stainless steel construction for hygiene",
                    "Available in different capacities",
                    "Ideal for pharmaceutical, food, and cosmetic applications",
                    "Used in pharmaceuticals, food processing, and chemicals for mixing, emulsifying, and homogenizing liquids or suspensions. Ensures uniform consistency and particle size reduction."
                ],
                specifications: {
                    capacity: "5 - 5000 L/hr",
                    MotorPower: "0.5 to 5 HP",
                    Speed: "1,000 to 25,000 RPM",
                    Material: "Stainless steel construction"
                },
                services: {
                    description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                    commissioning: "Ensuring equipment is tested and fully operational.",
                    validation: "GMP & FDA-compliant validation services.",
                    maintenance: "Annual maintenance contracts (AMC) available.",
                    support: "24/7 customer support for troubleshooting and assistance."
                }
            },

            "lifter":{
                name: "Lifter",
                // image: lifter, // Added image
                description: "Lifter is used for safe lifting and handling of materials in pharmaceutical manufacturing and material handling applications.",
                features: [
                    "Stainless steel construction for durability",
                    "Customizable lifting capacity and height",
                    "Hydraulic or pneumatic lifting options",
                    "GMP compliant design",
                    "Easy to clean and maintain",
                     "warehouses, pharmaceutical industries, food processing, and manufacturing plants for efficient lifting and transfer of materials"
                ],

                specifications: {
                    capacity: "50 - 5000 kg",
                    liftingHeight: "1 to 6 meters",
                    power: "Electric or manual operation",
                    structure: "Stainless steel or mild steel frame",
                    control: "Manual, electric, or hydraulic control",
                    safetyFeatures: "Overload protection, emergency stop, and safety lock"
                },
                services: {
                    description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                    commissioning: "Ensuring equipment is tested and fully operational.",
                    validation: "GMP & FDA-compliant validation services.",
                    maintenance: "Annual maintenance contracts (AMC) available.",
                    support: "24/7 customer support for troubleshooting and assistance."
                }
            },

            "platform-staircase":{
                name: "Platform & Staircase",
                // image: platform_staircase, // Added image
                description: "Platform & Staircase are used for safe access to elevated areas and equipment in pharmaceutical and industrial facilities.",
                features: [
                    "Stainless steel construction for hygiene",
                    "Customized platform sizes and heights",
                    "Anti-slip steps and handrails for safety",
                    "Easy installation and relocation",
                    "Complies with safety standards"
                ],
                specifications: {
                    material: "SS 304 / SS 316",
                    platformSize: "Customized",
                    height: "Customized"
                },
                services: {
                    description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                    commissioning: "Ensuring equipment is tested and fully operational.",
                    validation: "GMP & FDA-compliant validation services.",
                    maintenance: "Annual maintenance contracts (AMC) available.",
                    support: "24/7 customer support for troubleshooting and assistance."
                }
            },

            "inline-homogenizer":{
                name: "Inline Homogenizer",
                // image: inline_homogenizer, // Added image
                description: "Inline Homogenizer is used for continuous mixing, emulsifying, and homogenizing of liquid products in pharmaceutical and food industries.",
                features: [
                    "High-speed rotor-stator design for efficient mixing",
                    "Inline installation for continuous processing",
                    "Stainless steel construction for hygiene",
                    "Adjustable speed controls for different applications",
                    "Ideal for high-viscosity products",
                    "Used in food, pharmaceutical, and chemical industries for continuous emulsification, mixing, and homogenization, ensuring consistent product quality and uniform particle size."
                ],
                specifications: {
                    capacity: "100 - 5000 L/hr",
                    speed: "1000 to 25000 RPM",
                    material: "Stainless steel (SS304/SS316)",
                    pressureRange: "Up to 100 bar"
                },
                services: {
                    description: "We have team of qualified engineers for after sales service of supplied equipment. Our services includes installation, commissioning, validation, Service AMC etc.",
                    commissioning: "Ensuring equipment is tested and fully operational.",
                    validation: "GMP & FDA-compliant validation services.",
                    maintenance: "Annual maintenance contracts (AMC) available.",
                    support: "24/7 customer support for troubleshooting and assistance."
                }
            }
        }

};

export default products;


