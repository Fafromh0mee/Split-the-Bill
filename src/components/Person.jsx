import React from 'react'

const Person = ({ person, personIndex, menuItems, handlePersonChange, handlePersonItemChange }) => {
  return (
    <div className="person">
      <input 
        type="text" 
        placeholder="Person Name" 
        value={person.name} 
        onChange={(e) => handlePersonChange(personIndex, 'name', e.target.value)} 
        style={{ marginRight: '10px' }}
      />
      <div style={{ marginTop: '10px' }}>
        {menuItems.map((item, itemIndex) => (
          <label key={itemIndex} style={{ display: 'block', marginBottom: '5px' }}>
            <input 
              type="checkbox" 
              onChange={(e) => handlePersonItemChange(personIndex, itemIndex, e.target.checked)} 
              style={{ marginRight: '10px' }}
            />
            {item.name} (฿{item.price})
          </label>
        ))}
      </div>
    </div>
  )
}

export default Person