import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ marginTop: '100px' }}>
      <div style={{
        flex: 1,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          color: '#333',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>Contact Us</h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '10px'
        }}>123 Main Street, New Jersey, NJ 10001</p>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '10px'
        }}>(123) 456-7890</p>
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '20px'
        }}>info@luxuryrestaurant.com</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          color: '#333',
          marginBottom: '10px'
        }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


