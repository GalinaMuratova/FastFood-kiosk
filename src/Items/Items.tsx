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
                <h4>{props.name}</h4>
                <p>Price:{props.price}</p>
            </div>
        </div>
    );
};

export default Items;