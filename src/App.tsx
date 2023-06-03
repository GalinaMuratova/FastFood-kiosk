import React, {useState} from 'react';
import './App.css';
import Order from "./Order/Order";
import TotalPrice from "./TotalPrice/TotalPrice";
import Items from "./Items/Items";

function App() {
  const [items, setItems] = useState([
    {name: 'Hamburger', count: 0, price: 80},
    {name: 'Cheeseburger', count: 1, price: 90},
    {name: 'Fries', count: 0, price: 60},
    {name: 'Coffee', count: 0, price: 70},
    {name: 'Tea', count: 1, price: 50},
    {name: 'Cola', count: 0, price: 40}
  ]);

  const totalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    })
    return total;
  };

  const addItem = (index:number) => {
    const copyItems = [...items];
    const itemCopy = {...items[index]};
    itemCopy.count += 1;
    copyItems[index] = itemCopy;
    setItems(copyItems);
  }

  const removeItem = (index:number) => {
    const copyItems = [...items];
    const itemCopy = {...items[index]};
    itemCopy.count -= 1;
    copyItems[index] = itemCopy;
    setItems(copyItems);
  }

  return (
    <div className="App">
      <div className="order-details">
        {items.map((item, index)=> (
            <Order key={index} name={item.name} count={item.count} price={item.price} remove={()=> removeItem(index)}/>
        ))}
        <TotalPrice total={totalPrice()}/>
      </div>
      <div className="items">
        {items.map((item, index) =>(
            <Items key={index} name={item.name} price={item.price} onClick={() => addItem(index)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
