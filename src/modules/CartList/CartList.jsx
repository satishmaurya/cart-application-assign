import React, { useEffect, useState } from "react";
import {
    InputField,
    List,
    Button,
} from './Cart.style';

const CartList = (props) => {
const { productName, productDesc, price, id, image, currency, setPrice} = props;
const [counter, setCounter] = useState(1);
const incrementCounter = () => { setCounter(counter + 1); setPrice(counter)};
let decrementCounter = () => { setCounter(counter - 1); setPrice(counter)};
if(counter<=0) {
  setCounter(1);
}
  return (
    <List id={id}>
    <div className="product">
         <img src={`images/${image}`} />
         <div className="column">
         <span>{productName}</span>
         <span className="desc">{productDesc}</span>
         </div>
    </div>
    <div className="increment">
        <Button onClick={decrementCounter}>-</Button>
        <InputField value={counter} />
        <Button onClick={incrementCounter}>+</Button>
    </div>
    <div>{`${currency}${price * counter}`}</div>
    </List>
  );
};

export default CartList;
