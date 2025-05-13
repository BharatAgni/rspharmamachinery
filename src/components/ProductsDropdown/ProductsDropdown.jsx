import React, { useState, useRef, useEffect } from 'react';
import './ProductsDropdown.css';

const sectionsData = [
  {
    title: 'Liquid Section',
    items: [
      'Sparkler Filter Press',
      'Zero Hold Up Filter Press',
      'Inline Homogenizer',
      'ML Catch Pot',
    ],
  },
  {
    title: 'Drying',
    items: [
      'Tray Dryer',
      'Vacuum Tray Dryer',
      'Fluid Bed Dryer',
      'Rotocon Vacuum Dryer (RCVD)',
    ],
  },
  {
    title: 'Milling',
    items: ['Multi Mill', 'Colloid Mill'],
  },
  {
    title: 'Blending',
    items: ['Octagonal Blender', 'Double Cone Blender', 'Ribbon Blender'],
  },
  {
    title: 'Coating',
    items: ['Coating Pan', 'Auto Coater'],
  },
  {
    title: 'Others',
    items: ['Vibro Sifter', 'Rapid Mixer Granulator', 'IPC Bin', 'WFI Storage Tanks'],
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
    if (!isMobile) return; // Do nothing on desktop
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

              {/* Show all items on desktop, or show only if open on mobile */}
              {(openSections[section.title] || !isMobile) && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
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


