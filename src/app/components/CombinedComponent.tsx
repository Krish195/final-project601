import React from 'react';
import Newsletter from './Newsletter';  // Adjust the path as necessary
import Contact from './Contact';    // Adjust the path as necessary

const CombinedComponent: React.FC = () => {
  return (
    <section style={{
      display: 'flex', 
      flexWrap: 'wrap',  // Allows items to wrap to the next line on smaller screens
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '20px', 
      padding: '40px', 
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{ 
        flex: 1, 
        maxWidth: '500px', 
        minWidth: '300px', // Minimum width for smaller screens
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '10px',
        boxSizing: 'border-box' // Ensures padding is included in width calculation
      }}>
        <Newsletter />
      </div>
      <div style={{ 
        flex: 1, 
        maxWidth: '500px', 
        minWidth: '300px',
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '10px',
        boxSizing: 'border-box'
      }}>
        <Contact />
      </div>
    </section>
  );
};

export default CombinedComponent;

