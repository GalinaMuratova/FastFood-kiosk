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
                <div>
                    <span>{props.name}</span>
                    <span>x{props.count}</span>
                    <span>{props.price} KGS</span>
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