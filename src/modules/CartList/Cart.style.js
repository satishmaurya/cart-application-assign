import styled from 'styled-components';

const List = styled.div`
  background: #faf9ff;
  color: #000;
  height: 50px;
  position: relative;
  z-index: 0;
  border-bottom: 3px solid #e1e0e4;
  display:flex;
  padding:10px 50px;
  justify-content: space-around;
  align-items: center;
  img {max-width:30px; height: 30px;margin: 0 10px;}
  .column {display:flex;flex-direction:column}
  .product {
      display:flex;
    .desc {
        font-size:11px;
        color:#bbb;
    }
    }

`;
const Button = styled.button`
`;
const InputField = styled.input`
width:20px;
margin:0 10px;
padding:0 0 0 10px;
`;

export {
    Button,
    InputField,
    List,
};
