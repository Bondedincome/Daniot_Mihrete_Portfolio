// import { useState } from 'react';
import './CreativeToggle.css';
import logicBg from '../../assets/DeveloperToggle.png'; // Replace with your actual logic mode image
import creationBg from '../../assets/CreativeToggle.png'; // Replace with your actual creation mode image

function CreativeToggle({ theme, onToggle }) {
  const isLogic = theme === 'logic';

  return (
    <div className="creative-toggle-container">
      <button
        className={`creative-toggle ${isLogic ? 'logic' : 'creation'}`}
        onClick={() => onToggle(isLogic ? 'creation' : 'logic')}
        aria-label="Toggle creative mode"
      >
        <div
          className="creative-toggle-bg"
          style={{
            backgroundImage: `url(${isLogic ? logicBg : creationBg})`,
          }}
        />
        <div
          className="creative-toggle-knob"
          style={{
            left: isLogic ? 'calc(100% - 88px)' : '8px',
            background: isLogic ? '#a084ca' : '#f6e3b4',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}
        />
      </button>
    </div>
  );
}

export default CreativeToggle; 