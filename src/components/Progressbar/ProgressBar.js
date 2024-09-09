import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './progressbar.css';

const ProgressBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const steps = [
    { path: '/', label: ' Trends Space' },
    { path: '/industry', label: 'Industry' },
    { path: '/theme', label: 'Themes' },
    { path: '/trend', label: 'Trends' },
  ];

  const currentStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className="progress-outer-container">  {/* Set background color here */}
      <div className="progress-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`progress-step ${index <= currentStep ? 'active' : ''}`}
              onClick={() => navigate(step.path)}
            >
              <div className="progress-label">
                {step.label}
              </div>
              {index === currentStep && index < steps.length - 1 && (
                <div className="progress-button"></div>
              )}
            </div>
            {index < steps.length - 1 && <div className="progress-separator"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;