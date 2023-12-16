import React from "react";

const Footer = () => {
  return (
    <section id="footer" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #eaeaea' }}>
      <div style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '14px', paddingTop: '16px', paddingBottom: '8px', textAlign: 'center' }}>
          &copy; 2023 All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;