import React from 'react';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner" />
    <style>{`
      .loading-spinner {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #111111;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 9999;
      }
      .spinner {
        border: 4px solid #333;
        border-top: 4px solid #D4A437;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        animation: spin 1s linear infinite;
      }
      @keyframes spin { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
    `}</style>
  </div>
);

export default LoadingSpinner;
