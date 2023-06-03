import React from 'react';
 interface TotalPriceProps {
     total: number;
 }
const TotalPrice:React.FC<TotalPriceProps> = (props) => {
    if (props.total === 0) {
        return (
            <div>
                <p className="order-empty">Order is empty!</p>
            </div>
        )
    } else {
        return (
            <div className="order-items">
                <span className="total-text">Total price:</span>
                <span className="total-number">{props.total} KGS</span>
            </div>
        );
    }
};

export default TotalPrice;