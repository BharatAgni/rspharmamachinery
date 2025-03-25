import React from "react";
import "./DownloadPage.css";
import img_1 from "../../assets/industries-photos-3.jpg"

import img1 from "../../assets/CAITALOG/CAITALOG-2.jpg";
import img2 from "../../assets/CAITALOG/CAITALOG-3.jpg";
import img3 from "../../assets/CAITALOG/CAITALOG-4.jpg";
import img4 from "../../assets/CAITALOG/CAITALOG-5.jpg";
import img5 from "../../assets/CAITALOG/CAITALOG-6.jpg";
import img6 from "../../assets/CAITALOG/CAITALOG-7.jpg";
import img7 from "../../assets/CAITALOG/CAITALOG-8.jpg";
import img8 from "../../assets/CAITALOG/CAITALOG-9.jpg";
import img9 from "../../assets/CAITALOG/CAITALOG-10.jpg";
import img10 from "../../assets/CAITALOG/CAITALOG-11.jpg";
import img11 from "../../assets/CAITALOG/CAITALOG-12.jpg";
import img12 from "../../assets/CAITALOG/CAITALOG-13.jpg";

import pdf1 from "../../assets/CAITALOG-2.pdf"

const DownloadPage = () => {
  const pdfs = [
    { title: "Ointment Manufacturing Plant", img: img1, link: pdf1 },
    { title: "MIXER", img: img2, link: "#" },
    { title: "DRYER & VACUUM DRYER", img: img3, link: "#" },
    { title: "BLENDER", img: img4, link: "#" },
    { title: "MASS MIXER", img: img5, link: "#" },
    { title: "MULTI MILL", img: img6, link: "#" },
    { title: "CO MILL", img: img7, link: "#" },
    { title: "COLLOIDAL MILL", img: img8, link: "#" },
    { title: "VIBRO SHIFTER", img: img9, link: "#" },
    { title: "SPARKLER FILTER PRESS", img: img10, link: "#" },
    { title: "NUTSCHE FILTER", img: img11, link: "#" },
    { title: "FLUID BED DRYER", img: img12, link: "#" },
  ];

  const handleDownload = (pdfLink, title) => {
    fetch(pdfLink)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${title}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error("Download error:", error));
  };

  return (
    <div className="download-page">
      <div className="banner">
        <img src={img_1} alt="Download Banner" className="banner-img" />
      </div>
      <h2 className="download-title">Download</h2>
      <div className="pdf-container">
        {pdfs.map((pdf, index) => (
          <div key={index} className="pdf-item">
            <img src={pdf.img} alt={pdf.title} className="pdf-thumbnail" />
            <h3 className="pdf-title">{pdf.title}</h3>
            <button className="download-btn" onClick={() => handleDownload(pdf.link, pdf.title)}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;