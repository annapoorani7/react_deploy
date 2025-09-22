import React, { useState } from 'react'

function Effect() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
  return (
    
    <div>

        <input type='text' placeholder='Enter your name' value={name} onChange={handleChange}/>
        <p>Hello, {name || 'Stranger'}</p>
    </div>
  )
}

export default Effect

