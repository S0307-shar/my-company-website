import React from 'react';

const Home = () => {
  const sectionStyle = {
    padding: '2rem',
    textAlign: 'center'
  };

  const heroStyle = {
    backgroundColor: '#f5f5f5',
    padding: '2rem 0',
    marginBottom: '2rem'
  };

  const heroHeadingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem'
  };

  const heroParagraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto'
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={heroHeadingStyle}>Welcome to XYZ Control Panels</h1>
        <p style={heroParagraphStyle}>
          Your trusted partner for reliable and innovative electrical control panel solutions.
          From custom-built systems to standardized models, we deliver exceptional quality 
          and service for all your industrial and commercial needs.
        </p>
      </section>

      {/* Highlights / Value Proposition */}
      <section style={sectionStyle}>
        <h2>Why Choose XYZ Control Panels?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 300px', margin: '1rem', minWidth: '280px' }}>
            <h3>High-Quality Components</h3>
            <p>
              We source only top-grade components from reputable manufacturers, ensuring
              durability and safety in every control panel we produce.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', margin: '1rem', minWidth: '280px' }}>
            <h3>Customized Solutions</h3>
            <p>
              Our experienced engineering team tailors solutions to meet your unique
              requirements, whether for small businesses or large-scale industrial plants.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', margin: '1rem', minWidth: '280px' }}>
            <h3>Exceptional Support</h3>
            <p>
              From initial consultation to ongoing maintenance, we’re here at every step to
              ensure your systems perform optimally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
