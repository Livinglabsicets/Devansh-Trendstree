import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './screen2.css';
import backgroundVideo from '../../Asserts/Background-video-s1s2.mp4';

const Screen2 = () => {
  // Define the star names here in the component
  const starNames = [
    // "Mining",
    // "Travel",
    // "Energy",
    // "Chemical",
    // "Construction",
    // "Banking",
    // "Telecom",
    // "Utilities",
    // "Insurance",
    // "Retail",
"Travel",
"Mining",
"Hospitality",
"Energy",
"Entertainment",
"Construction",
"Chemical",
"Non-Waven",
"Automotive",
"Insurance",
"Logistics",
"Healthcare",
"Telecom",
"Utilities",
"Capital Market",
"Retail",
"Banking",

  ];

  const canvasRef = useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // const sunRadius = 50;
    const sunName = "Industry Galaxy";
    const starRadius = 6;
    const sunX = canvas.width / 2;
    const sunY = canvas.height / 2;

    // Fixed positions for stars (adjust as needed)
    const positions = [
      { x: sunX - 450, y: sunY - 160 },
      { x: sunX - 300, y: sunY - 250 },
      { x: sunX - 200, y: sunY - 160 },
      { x: sunX - 300, y: sunY - 60 },
      { x: sunX - 200, y: sunY + 10 },
      { x: sunX - 550, y: sunY + 40 },
      { x: sunX - 320, y: sunY + 60 },
      { x: sunX - 400, y: sunY + 140 },
      { x: sunX - 250, y: sunY + 240 },
      { x: sunX + 150, y: sunY - 100 },
      { x: sunX + 300, y: sunY - 160 },
      { x: sunX + 400, y: sunY + 140 },
      { x: sunX + 450, y: sunY - 140 },
      // { x: sunX + 50, y: sunY - 100 },
      { x: sunX + 340, y: sunY - 20 },
      { x: sunX + 550, y: sunY + 20 },
      { x: sunX + 280, y: sunY + 80 },
      { x: sunX + 200, y: sunY + 140 }
    ];

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the sun
    // ... (commented out for brevity)

    // Draw stars at fixed positions
    for (let i = 0; i < starNames.length; i++) {
      const { x, y } = positions[i];
      
      ctx.fillStyle = "white";
      ctx.font = "24px Orbitron";
      ctx.textAlign = "center";
      ctx.fillText(sunName, sunX, sunY + 350);
      // Draw star (yellow circles)
      ctx.beginPath();
      ctx.arc(x, y, starRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();

      // Draw star names below the stars
      ctx.fillStyle = "white";
      ctx.font = "16px Orbitron";
      ctx.textAlign = "center";
      ctx.fillText(starNames[i], x, y + starRadius + 20);
    }
// Add click event listener
const handleClick = (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
   const mouseY = event.clientY - rect.top;

  // Check if the clicked position is on any star
  for (let i = 0; i < positions.length; i++) {
    const { x, y } = positions[i];
    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
    if (distance <= starRadius) {
      if (starNames[i] === "Insurance") {
        navigate("/theme");
      }
      break;
    }
  }
};

canvas.addEventListener("click", handleClick);

return () => {
  canvas.removeEventListener("click", handleClick);
};
}, [navigate]);
  return (
    <div>
      <video
        className="video-background"
        autoPlay
        muted={false} // Set muted to false to enable audio
        loop
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <canvas ref={canvasRef} width={1300} height={800}></canvas>
    </div>
  );
};

export default Screen2;