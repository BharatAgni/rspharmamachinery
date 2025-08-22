import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsDropdown.css';

const sectionsData = [
  {
    title: 'Ointment & Liquid Section',
    items: [
      'Ointment Manufacturing Plant',
      'Liquid Oral Processing plant',
      'Manufacturing Plant',
      'Storage Tank',
      'Sparkler Filter Press',
    ],
  },
  {
    title: 'Drying/Processing Equipments',
    items: [
      'Air Tray Dryer',
      'Vacuum Tray Dryer',
      'Auto Coter',
      'Coating Pan',
    ],
  },
  {
    title: 'Blending & Mixing',
    items: [
      'Octagonal Blender',
      'Double Cone Blender',
      'Ribbon Blender',
      'V-Blender',
      'Vacuum Blender',
    ],
  },
  {
    title: 'Granulation/Tablet Section',
    items: [
      'Fluid Bed Processor',
      'Rapid Mixer Granulator',
      'Multi Mill',
      'Vibro Sifter',
      'Co-Mill',
      'Colloidal Mill',
      'Powder Transfer Technology',
      'Reactor',
    ],
  },
  {
    title: 'Others',
    items: [
      'Lifter',
      'Stand Homogenizer',
      'Platform & Staircase',
      'Inline Homogenizer',
    ],
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const toggleSection = (title) => {
    if (!isMobile) return;
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSections({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Products <span className={`arrow-icon ${isOpen ? 'rotate' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {sectionsData.map((section) => (
            <div className="dropdown-column" key={section.title}>
              <h4
                onClick={() => toggleSection(section.title)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                {section.title}
                {isMobile && (
                  <span style={{ float: 'right' }}>
                    {openSections[section.title] ? '-' : '+'}
                  </span>
                )}
              </h4>

              {(openSections[section.title] || !isMobile) && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={`/product/${encodeURIComponent(item)}`}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenSections({});
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;



