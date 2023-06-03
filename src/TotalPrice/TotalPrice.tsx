import React from 'react';
 interface TotalPriceProps {
     total: number;
 }
const TotalPrice:React.FC<TotalPriceProps> = (props) => {
    if (props.total === 0) {
        return (
            <div>
                Order is empty
            </div>
        )
    } else {
        return (
            <div>
                <span>Total price:</span>
                <span>{props.total}</span>
            </div>
        );
    }
};

export default TotalPrice;