import styled from 'styled-components';

const NavBar = styled.div`
  background: #faf9ff;
  color: #000;
  height: 70px;
  position: relative;
  z-index: 1;
  border-bottom: 5px solid #e1e0e4;
  display:flex;
  padding:0 50px;
  justify-content: flex-end;
  align-items: center;
  .column {
    display:flex;
    flex-direction: column;
  }
  img {    max-width: 40px;
    height: 40px;}
    span.menu {position:relative}
`;

export {
  NavBar,
};
