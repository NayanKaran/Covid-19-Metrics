import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const handleKeyEvent = (event) => {
    const { key } = event;
    if (key === 'Backspace') {
      navigate(-1);
    }
  };

  return (
    <header style={{
      backgroundColor: '#eb4c89', display: 'flex', alignItems: 'center', height: '56px', color: 'white',
    }}
    >
      <div
        style={{
          padding: '0 8px',
        }}
        className={location.pathname === '/' ? 'hidden' : undefined}
        onClick={goBack}
        onKeyUp={handleKeyEvent}
        role="button"
        tabIndex="0"
      >
        <i className="fa-solid fa-angle-left" style={{ color: 'white' }} />
      </div>
      <span style={{
        margin: '0 auto',
        paddingBottom: '4px',
        fontSize: '24px',
      }}
      >
        {location.pathname === '/' ? 'global cases' : 'continent cases'}
      </span>
    </header>
  );
};

export default Header;
