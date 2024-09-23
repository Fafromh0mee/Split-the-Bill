import { useState } from 'react'
import './App.css'
import MenuItem from './components/MenuItem'
import Person from './components/Person'

function App() {
  const [menuItems, setMenuItems] = useState([{ name: '', price: 0 }])
  const [people, setPeople] = useState([{ name: '', items: [] }])
  const [splitAmounts, setSplitAmounts] = useState([])
  const [theme, setTheme] = useState('light')

  const handleMenuItemChange = (index, field, value) => {
    const newMenuItems = [...menuItems]
    newMenuItems[index][field] = field === 'price' ? parseFloat(value) : value
    setMenuItems(newMenuItems)
  }

  const handlePersonChange = (index, field, value) => {
    const newPeople = [...people]
    newPeople[index][field] = value
    setPeople(newPeople)
  }

  const handlePersonItemChange = (personIndex, itemIndex, value) => {
    const newPeople = [...people]
    const items = newPeople[personIndex].items
    if (value) {
      items.push(menuItems[itemIndex])
    } else {
      const itemIndexToRemove = items.findIndex(item => item.name === menuItems[itemIndex].name)
      items.splice(itemIndexToRemove, 1)
    }
    newPeople[personIndex].items = items
    setPeople(newPeople)
  }

  const handleCalculate = () => {
    const newSplitAmounts = people.map(person => {
      const total = person.items.reduce((sum, item) => sum + item.price, 0)
      return { name: person.name, total }
    })
    setSplitAmounts(newSplitAmounts)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div className={`${theme} container`}>
        <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <h1>Split the Bill</h1>
        <h2>Menu Items</h2>
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index} 
            item={item} 
            index={index} 
            handleMenuItemChange={handleMenuItemChange} 
            className="menu-item"
          />
        ))}
        <button onClick={() => setMenuItems([...menuItems, { name: '', price: 0 }])} style={{ marginBottom: '20px' }}>Add Menu Item</button>

        <h2>People</h2>
        {people.map((person, personIndex) => (
          <Person 
            key={personIndex} 
            person={person} 
            personIndex={personIndex} 
            menuItems={menuItems} 
            handlePersonChange={handlePersonChange} 
            handlePersonItemChange={handlePersonItemChange} 
            className="person"
          />
        ))}
        <button onClick={() => setPeople([...people, { name: '', items: [] }])} style={{ marginBottom: '20px' }}>Add Person</button>

        <button onClick={handleCalculate} style={{ marginBottom: '20px' }}>Calculate</button>
        <div>
          <h2>Each person pays:</h2>
          {splitAmounts.map((split, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {split.name}: ฿{split.total.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App