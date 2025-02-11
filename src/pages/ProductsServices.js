import React from 'react';

const ProductsServices = () => {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const sectionStyle = {
    marginBottom: '2rem'
  };

  const headingStyle = {
    marginBottom: '1rem',
    borderBottom: '1px solid #ccc',
    paddingBottom: '0.5rem'
  };

  return (
    <div style={containerStyle}>
      <h1>Products &amp; Services</h1>

      {/* Products Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Products</h2>
        <ul>
          <li>
            <strong>Standard Control Panels:</strong>  
            Robust, pre-engineered solutions for common industrial applications. 
            Built with top-brand components and tested for reliability.
          </li>
          <li>
            <strong>Custom-Built Control Panels:</strong>  
            Tailored to your specific operational needs, including unique layouts,
            specialized instrumentation, and high-capacity power management.
          </li>
          <li>
            <strong>PLC &amp; Automation Solutions:</strong>  
            Programmable logic controllers (PLC) for advanced automation and 
            real-time data monitoring, improving efficiency and reducing downtime.
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Services</h2>
        <ul>
          <li>
            <strong>Panel Assembly &amp; Wiring:</strong>  
            Comprehensive manufacturing services, from part sourcing to final testing.
          </li>
          <li>
            <strong>System Integration &amp; Programming:</strong>  
            Our engineers integrate complex automation systems and ensure seamless 
            communication between hardware and software.
          </li>
          <li>
            <strong>Maintenance &amp; Support:</strong>  
            Post-installation support including regular check-ups, on-demand repairs, 
            and remote troubleshooting.
          </li>
        </ul>
      </div>

      {/* Additional Info or Call to Action */}
      <div style={sectionStyle}>
        <p>
          Not seeing what you need? Our experts are here to discuss custom solutions or
          modifications to existing products. 
          <strong> Get in touch to learn how we can support your project.</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductsServices;
