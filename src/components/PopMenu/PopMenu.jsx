import React, { useState, useEffect } from "react";
import { PopMenuStyled } from "./PopMenu.style";

const PopupMenu = (props) => {
  const { quan, data, setQuan } = props;
  const [isShown, setIsShown] = useState(false);
  const [list, setList] = useState();
  const handleToggleButtonClick = () => {

    setIsShown(isShown ? false : true);
  };
  const removeHandler =(id) => {
    if(id === '123442') {
        setList(list.filter(d => d.id !== '123442'));
        setQuan({prod1: quan.prod1-1, prod2: quan.prod2});
    }
    if(id === '123443') {
        setList(list.filter(d => d.id !== '123443'));
        setQuan({prod1: quan.prod1, prod2: quan.prod2-1})
    }
  }
  useEffect(() => {
    setList(data);
}, [data]);

  return (
    <PopMenuStyled>
      <div className="popup-menu-container">
        <button onClick={handleToggleButtonClick}>
          {`${quan.prod1 + quan.prod2} items`}
          <div className="arrow"></div>
        </button>
        <div className={`popup-menu ${isShown ? "shown" : ""}`}>
          {list && list.map((item) => (
            <div className={`list`} id={item.id}>
                <button className="close" onClick={() => removeHandler(item.id)}>X</button>
                <div className="column">
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                </div>
              <span className="quan">{`Qty ${quan.prod1}`}</span>
            </div>
          ))}
        </div>
      </div>
    </PopMenuStyled>
  );
};

export default PopupMenu;
