import React from 'react';

interface OrderProps {
    name: string;
    count:number;
    price:number;
    remove:React.MouseEventHandler;
}
const Order:React.FC<OrderProps> = (props) => {
    if (props.count !== 0) {
        return (
            <div>
                <div className="dishes-order">
                    <span className="name-item">{props.name}</span>
                    <span className="count-item">x{props.count}</span>
                    <span className="price-item">{props.price} KGS</span>
                    <button className="remove-btn" onClick={props.remove}></button>
                </div>
            </div>
        );
    }
    return (
        <div></div>
    );

};

export default Order;