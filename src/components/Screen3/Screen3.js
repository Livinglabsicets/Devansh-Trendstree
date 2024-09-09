import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './screen3.css';
import video1 from '../../Asserts/Planet2.mp4';
import video2 from '../../Asserts/Planet2.mp4';
import video3 from '../../Asserts/Planet2.mp4';
import video4 from '../../Asserts/Planet2.mp4';
import video5 from '../../Asserts/Planet2.mp4';
import sunVideo from '../../Asserts/Sun.mp4';

const Screen3 = () => {
    const [openButtonIndex, setOpenButtonIndex] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const videoUrls = [video1, video2, video3, video4, video5];

    const surroundingButtonsConfig = [
        [
            { className: "top-button", label: "Top 1" },
            { className: "top-right-button", label: "Top Right 1" },
            { className: "top-left-button", label: "Top Left 2" },
            { className: "left-button", label: "Left 1" },
            { className: "right-button", label: "Right 2" },
        ],
        [
            { className: "top-button", label: "Top 2" },
            { className: "top-right-button", label: "Top Right 2" },
            { className: "right-button", label: "Right 2" },
            { className: "bottom-right-button", label: "Bottom Right 2" },
            { className: "bottom-button", label: "Bottom 2" },
            { className: "bottom-left-button", label: "Bottom Left 2" },
            { className: "left-button", label: "Left 2" },
            { className: "top-left-button", label: "Top Left 2" }
        ],
        [
            { className: "top-button", label: "Top 3" },
            { className: "top-right-button", label: "Top Right 3" },
            { className: "right-button", label: "Right 3" },
            { className: "bottom-right-button", label: "Bottom Right 3" },
            { className: "bottom-button", label: "Bottom 3" },
            { className: "bottom-left-button", label: "Bottom Left 3" },
            { className: "left-button", label: "Left 3" },
            { className: "top-left-button", label: "Top Left 3" }
        ],
        [
            { className: "top-button", label: "Top 4" },
            { className: "top-right-button", label: "Top Right 4" },
            { className: "right-button", label: "Right 4" },
            { className: "bottom-right-button", label: "Bottom Right 4" },
            { className: "bottom-button", label: "Bottom 4" },
            { className: "bottom-left-button", label: "Bottom Left 4" },
            { className: "left-button", label: "Left 4" },
            { className: "top-left-button", label: "Top Left 4" }
        ],
        [
            { className: "top-button", label: "Top 5" },
            { className: "top-right-button", label: "Top Right 5" },
            { className: "right-button", label: "Right 5" },
            { className: "bottom-right-button", label: "Bottom Right 5" },
            { className: "bottom-button", label: "Bottom 5" },
            { className: "bottom-left-button", label: "Bottom Left 5" },
            { className: "left-button", label: "Left 5" },
            { className: "top-left-button", label: "Top Left 5" }
        ]
    ];

    const handleClick = (index) => {
        setOpenButtonIndex(prevIndex => prevIndex === index ? null : index);
    };

    const handleSurroundingButtonClick = (mainIndex, surroundingIndex) => {
        // Navigate to the Screen4 component and pass the indices as state
        navigate('/screen4', { state: { mainIndex, surroundingIndex } });
    };

    return (
        <div className="toggle-container">
            <div className='planets'>
                {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="button-group">
                        <button
                            onClick={() => handleClick(index)}
                            className="main-toggle-button"
                        >
                            <video
                                className="button-video"
                                src={videoUrls[index]}
                                loop
                                muted
                                autoPlay
                            />
                        </button>
                        {openButtonIndex === index && (
                            <div className="button-wrapper">
                                {surroundingButtonsConfig[index].map(({ className, label }, i) => (
                                    <div key={i} className={`button-with-label main-${index + 1}-${className}`}>
                                        <button
                                            className={className}
                                            onClick={() => handleSurroundingButtonClick(index, i)} // Handle click on surrounding button
                                        ></button>
                                        <span className={`button-label main-${index + 1}-${className}-label`}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="sun">
                <video
                    className="sun-video"
                    src={sunVideo}
                    loop
                    muted
                    autoPlay
                />
            </div>
        </div>
    );
}

export default Screen3;
