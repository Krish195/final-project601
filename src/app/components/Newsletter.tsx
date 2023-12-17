import React from 'react';

const Newsletter: React.FC = () => {
  // Replace with your Mailchimp form action URL and the name/id for the input field
  const MAILCHIMP_URL = 'https://njit.us17.list-manage.com/subscribe?u=6a42477c338ef53fa8019afe8&id=05a5c59220';

  return (
    <section style={{ textAlign: 'center', padding: '40px 0' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Newsletter</h2>
      <p style={{ fontSize: '16px', marginBottom: '24px' }}>
        Subscribe to our newsletter and get our latest updates.
      </p>
      <form action={MAILCHIMP_URL} method="post" target="_blank" noValidate>
        {/* <div style={{ marginBottom: '24px' }}>
          <input
            type="email"
            name="EMAIL" // Typically 'EMAIL', but check your Mailchimp form's code
            placeholder="Email"
            style={{
              fontSize: '16px',
              padding: '8px',
              border: '1px solid #ccc',
              width: '250px', // Adjust width as necessary
              margin: '0 auto',
            }}
            required
          />
        </div> */}
        <input
          type="submit"
          value="Subscribe"
          style={{
            fontSize: '16px',
            padding: '10px 20px',
            backgroundColor: '#c0a080', // Your button color
            color: 'white',
            border: 'none',
            borderRadius: '20px', // Adjust for roundness
            cursor: 'pointer',
          }}
        />
      </form>
    </section>
  );
};

export default Newsletter;
