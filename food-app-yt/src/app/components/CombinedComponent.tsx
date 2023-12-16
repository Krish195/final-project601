import React from 'react';
import Newsletter from './Newsletter';  // Adjust the path as necessary
import Contact from './Contact';    // Adjust the path as necessary

const CombinedComponent: React.FC = () => {
  return (
    <section style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '40px', 
      padding: '60px', 
      backgroundColor: '#f0f0f0', // Grey background
    }}>
      <div style={{ flex: 1, maxWidth: '500px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginTop: '100px', marginRight: '300px' }}>
        <Newsletter />
      </div>
      <div style={{ flex: 1, maxWidth: '500px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <Contact />
      </div>
    </section>
  );
};

export default CombinedComponent;
