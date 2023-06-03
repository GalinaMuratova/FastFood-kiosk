import React, {useState} from 'react';
import './App.css';
import Order from "./Order/Order";
import TotalPrice from "./TotalPrice/TotalPrice";

function App() {
  const [items, setItems] = useState([
    {name: 'Hamburger', count: 0, price: 80},
    {name: 'Cheeseburger', count: 0, price: 90},
    {name: 'Fries', count: 0, price: 60},
    {name: 'Coffee', count: 0, price: 70},
    {name: 'Tea', count: 0, price: 50},
    {name: 'Cola', count: 0, price: 40}
  ]);

  const totalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    })
    return total;
  };

  return (
    <div className="App">
      {items.map(item=> (
          <Order name={item.name} count={item.count} price={item.price}/>
      ))}
      <TotalPrice total={totalPrice()}/>
    </div>
  );
}

export default App;
