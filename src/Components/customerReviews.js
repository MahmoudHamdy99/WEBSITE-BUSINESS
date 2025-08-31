import { useState, useEffect } from "react";

export default function CustomerReviews({ reviews }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout1 = setTimeout(() => {
            setAnimate(false);
            setEnter(true);
        }, 600);
        const timeout2 = setTimeout(() => setEnter(false), 1200);
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [activeIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev =>
                prev === reviews.length - 1 ? 0 : prev + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const review = reviews[activeIndex];

    return (
        <div className='custom'>
            <div className={`custom-content slide-in${animate ? " animate" : ""}${enter ? " enter" : ""}`}>
                <h2>{review.title}</h2>
                <p>{review.description}</p>
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