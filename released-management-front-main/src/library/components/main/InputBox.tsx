import styled from 'styled-components';

const InputBox = styled.input`
  width: 345px;
  height: 43px;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 12px;
  color: #000000;
  display: flex;
  margin-top: 20px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  ::placeholder {
    color: #000000 Solid;
    font-family: Roboto;
    font-style: Regular;
    font-size: 12px;
    position: relative;
  }
`;

/** @component */
export default InputBox;
