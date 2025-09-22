import React, { useState } from 'react';

function Toggle() {
  const [isDark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#222',
        height: '100vh',
        paddingTop: 50,
        textAlign: 'center',
        
      }}
    >
      <button onClick={() => setDark(!isDark)}>Toggle Theme</button>
      <h1 onClick={() => setDark(!isDark)}>Toggle Theme </h1>
    </div>
  );
}

export default Toggle;
