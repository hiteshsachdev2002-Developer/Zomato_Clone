import React from 'react';
import '../../styles/Header.css'; 

function OfflinePage() {
  return (
    <div className="offline-container">
      <div className="offline-card">
        <h1 className="offline-title">You're Offline</h1>
        <p className="offline-message">
          Please check your internet connection and try again.
        </p>
        <div className="offline-icon">📡</div>
      </div>
    </div>
  );
};

export default OfflinePage;
