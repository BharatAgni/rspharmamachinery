import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Testimonial.css';
import Title from '../Title/Title';
import arrow_left from '../../assets/back-icon.png';
import arrow_right from '../../assets/next-icon.png';
import testimonials from '../../assets/testimonial';
import Indicator from '../Indicator/Indicator';

const Testimonial = () => {
    const slider = useRef(null);
    const [sliderCount, setSliderCount] = useState(0);
    const testimonialLength = testimonials.length;
    const intervalRef = useRef(null);

    const handleNext = () => {
        setSliderCount((prev) => (prev < testimonialLength - 1 ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setSliderCount((prev) => (prev > 0 ? prev - 1 : testimonialLength - 1));
    };

    const startSlider = useCallback(() => {
        stopSlider();
        intervalRef.current = setInterval(() => {
            setSliderCount((prev) => (prev < testimonialLength - 1 ? prev + 1 : 0));
        }, 100000);
    }, [testimonialLength]);

    const stopSlider = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startSlider();
        const sliderEl = slider.current;
        if (sliderEl) {
            sliderEl.addEventListener('mouseenter', stopSlider);
            sliderEl.addEventListener('mouseleave', startSlider);
        }
        return () => {
            stopSlider();
            if (sliderEl) {
                sliderEl.removeEventListener('mouseenter', stopSlider);
                sliderEl.removeEventListener('mouseleave', startSlider);
            }
        };
    }, [startSlider]);

    useEffect(() => {
        if (slider.current) {
            slider.current.style = `transform: translateX(${sliderCount * (-100 / testimonialLength)}%); width:${testimonialLength * 100}%`;
        }
    }, [sliderCount, testimonialLength]);

    return (
        <div className="testimonials">
            <Title title="What Our Clients Are Saying" titleText="Explore the impact we have made on our clients" />
            <img src={arrow_left} className="arrow-left" alt="Previous" onClick={handlePrev} />
            <img src={arrow_right} className="arrow-right" alt="Next" onClick={handleNext} />
            <div className="slider" ref={slider}>
                {testimonials.map((testimony, index) => (
                    <div className="slide" key={index}>
                        <div className="content">
                            <div className="testifier">
                                <div className="img">
                                    <img src={testimony.photo} alt={testimony.name} />
                                </div>
                                <div className="testifier-container">
    <div className="testifier-info">
        <h4>{testimony.name}</h4>
        <span>{testimony.course}</span>
    </div>
    <div className="testifier-contacts">
        {testimony.phone && <p>📞 {testimony.phone}</p>}
        {testimony.email && <p>📧 <a href={`mailto:${testimony.email}`}>{testimony.email}</a></p>}
        {testimony.linkedin && <p>🔗 <a href={testimony.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
    </div>
</div>

                            </div>
                            <div className="testimony">{testimony.message}</div>
                        </div>
                    </div>
                ))}
            </div>
            <Indicator items={testimonials} counter={sliderCount} />
        </div>
    );
};

export default Testimonial;

