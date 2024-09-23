import React from 'react'

const MenuItem = ({ item, index, handleMenuItemChange }) => {
  return (
    <div className="menu-item">
      <input 
        type="text" 
        placeholder="Item Name" 
        value={item.name} 
        onChange={(e) => handleMenuItemChange(index, 'name', e.target.value)} 
        style={{ marginRight: '10px' }}
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={item.price} 
        onChange={(e) => handleMenuItemChange(index, 'price', e.target.value)} 
        style={{ marginRight: '10px' }}
      />
    </div>
  )
}

export default MenuItem