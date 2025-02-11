import React from 'react';

const About = () => {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headingStyle = {
    marginBottom: '1rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About XYZ Control Panels</h1>
      <p>
        Established in 2002, XYZ Control Panels began with a simple mission: to provide 
        reliable, high-quality electrical control panels to industries across the globe. 
        Since then, we have grown into a full-service manufacturer, offering a comprehensive 
        range of design, fabrication, and support services.
      </p>
      <p>
        Our team consists of experienced engineers, technicians, and support staff dedicated 
        to innovation and continuous improvement. By staying ahead of industry trends and 
        embracing new technologies, we ensure that our clients always receive the best 
        solutions on the market.
      </p>
      <h2 style={headingStyle}>Our Vision</h2>
      <p>
        We envision a future where every industrial and commercial operation runs smoothly 
        and safely, powered by advanced, user-friendly control systems. Our goal is to be 
        a key contributor to that future by setting new standards in control panel technology.
      </p>
      <h2 style={headingStyle}>Core Values</h2>
      <ul>
        <li><strong>Quality:</strong> Maintaining the highest standards in our products and services.</li>
        <li><strong>Innovation:</strong> Continuously improving and integrating the latest technologies.</li>
        <li><strong>Integrity:</strong> Building trust through transparency and ethical business practices.</li>
        <li><strong>Customer Focus:</strong> Prioritizing client needs and tailoring solutions accordingly.</li>
      </ul>
    </div>
  );
};

export default About;
