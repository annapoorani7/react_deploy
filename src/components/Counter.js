import React, { useState } from 'react';
import myImage from './Birkin.webp';

function Counter() {
  const [count, setCount] = useState(0);

  const handleDelete = () => {
    setCount(0);
  };

  const buttonStyle = {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#d8a7b1', 
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    flex: 1,
    margin: '5px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '30px',
    padding: '30px',
    maxWidth: '1200px',
    margin: '40px auto',
    backgroundColor: '#fff0f5',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    flexWrap: 'wrap',
    flexDirection: 'row',
  };

  const paragraphStyle = {
    flex: 1.3,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
  };

  const imageStyle = {
    flex: 1,
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const buttonGroupStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px', color: '#6a1b44' }}>Cart</h1>

      <div style={containerStyle}>
        <div style={paragraphStyle}>
          <h2 style={{ color: '#6a1b44' }}>Birkin Faubourg Tropical</h2>
          <p>
            The Birkin tells an epic story with flair: a design by the creative duo Octave Marsal and Théo de Gueltzl,
            embroidered in Lunéville stitch, plunges the emblematic Faubourg Saint-Honoré store into the heart of a
            luxuriant jungle. In an ultimate display of prowess, the design extends over the leather of the flap and
            the base of the bag.
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '18px', color: '#444' }}>
            Price: $5000
          </p>
        </div>

        {/* Center: Image */}
        <img src={myImage} alt="Birkin Bag" style={imageStyle} />

        {/* Right: Buttons */}
        <div style={buttonGroupStyle}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <button onClick={() => setCount(count + 1)} style={buttonStyle}>+</button>
            <button style={{ ...buttonStyle, cursor: 'default' }}>{count}</button>
            <button onClick={() => count > 0 && setCount(count - 1)} style={buttonStyle}>-</button>
          </div>

          <button onClick={handleDelete} style={buttonStyle}>Delete</button>

          <div style={{ display: 'flex', marginTop: '10px' }}>
            <button style={{ ...buttonStyle, cursor: 'default' }}>Save for Later</button>
            <button style={{ ...buttonStyle, cursor: 'default' }}>See More Like This</button>
          </div>



          <button style={{ ...buttonStyle, marginTop: '20px', backgroundColor: '#6a1b44' }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
