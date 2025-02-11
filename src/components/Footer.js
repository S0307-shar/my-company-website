import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#f1f1f1',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem'
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} XYZ Control Panels. All Rights Reserved.</p>
      <p>
        <small>
          1234 Main Street, Suite 100, Anytown, CA 12345 - (800) 123-4567
        </small>
      </p>
    </footer>
  );
};

export default Footer;
