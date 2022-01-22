import styled from 'styled-components';

const PopMenuStyled = styled.div`
.popup-menu-container {
    position: relative;
  }
  
  .popup-menu {
    position: absolute;
    z-index: 200;
    transform: scale(0);
    transform-origin: top right;
    right:0;
    width: 300px;
    margin-top: 0.5rem;
    background: #b2d4dc;
    border-radius: 0.5rem;
    
    transition: transform 0.2s;
    
    &.shown {
      transform: scale(1);
    }
  }
  button {
    border:0; background: transparent }
  .arrow {
      display:inline-block;
      width: 0;
      height: 0;
      margin: 0px auto;
      border-left:
      5px solid transparent;
     border-right:
      5px solid transparent;
      border-top:
      8px solid black;
  }
  .list {
      display:flex;
      padding:20px;
      position:relative;
      border-bottom:1px solid #bbb;
      &:last-child {border:0}
      .column {
          display:flex;
          flex-direction:column;
        span:last-child{font-size:11px;}
        }
    .quan {position:absolute;right:20px;top:20px;font-size:12px;}
    .close {color:#fff;position:relative;right:10px}
  }
`;

export {
    PopMenuStyled,
};
