import React from 'react';

interface ItemsProps {
    name: string;
    price:number;
    onClick: React.MouseEventHandler;
}

const Items:React.FC<ItemsProps> = (props) => {
    return (
        <div className="dish" onClick={props.onClick}>
            <div className={props.name + '-img'}></div>
            <div>
                <h3>{props.name}</h3>
                <p>Price:{props.price} kgs</p>
            </div>
        </div>
    );
};

export default Items;