import React, { useEffect, useState } from "react";
import {
  NavBar,
} from './TopNav.style';
import PopupMenu from '../../components/PopMenu';

const TopNav = (props) => {
const { price, data } = props;
const [quan, setQuan] = useState({prod1: 1, prod2: 1});
  return (
    <NavBar>
      <div className="column">
       <span className="price">
        {`$${39 * (quan.prod1 + quan.prod2)}`}
       </span>
       <span className="menu">
         {/* {`${price} items`} */}
         <PopupMenu quan={quan} data={data} setQuan={setQuan} />
         </span>
       </div>
       <img src="images/shopping-cart.png" />
    </NavBar>
  );
};

export default TopNav;
