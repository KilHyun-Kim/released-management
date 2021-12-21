import styled from 'styled-components';

interface Props{
  props? : any;
  style?: any;
  onClick?: any;
}

const Circle = styled.div<Props>`
  width: 70px;
  height: 70px;
  position: relative;
  border-radius: 50%;
  background-color: ${(props) => (!props.props ? "#c4c4c4" : "#ff0000")};
  text-align: center;
  display: flex;
  // justify-content: center;
  // align-items: center;
`;

/** @component */
export default Circle;
