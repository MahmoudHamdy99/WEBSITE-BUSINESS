import { useState, useEffect } from "react";

export default function CustomerReviews({ reviews }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev =>
                prev === reviews.length - 1 ? 0 : prev + 1
            );
        }, 5000); // Increased interval for better readability
        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className='custom'>
            <div className="slider-container">
                <div 
                  className="slider-track" 
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {reviews.map((review, index) => (
                        <div className="slide" key={review.id || index}>
                            <h2>{review.title}</h2>
                            <p>{review.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="custom-icon">
                {reviews.map((_, idx) => (
                    <span
                        key={idx}
                        className={activeIndex === idx ? "active" : ""}
                        onClick={() => setActiveIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
}