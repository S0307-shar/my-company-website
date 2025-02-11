import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // For a static site, you could integrate with a 3rd-party form service like Formspree or Netlify Forms
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const headingStyle = {
    marginBottom: '1rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem'
  };

  const textareaStyle = {
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem',
    height: '100px'
  };

  const submitBtnStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>

      <p>
        Have questions about our products, services, or want to discuss a potential
        project? We’d love to hear from you. Fill out the form below or reach us via
        email or phone.
      </p>
      <p>
        <strong>Email:</strong> info@xyzcontrolpanels.com <br/>
        <strong>Phone:</strong> +1 (800) 123-4567
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={textareaStyle}
        />

        <button type="submit" style={submitBtnStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
