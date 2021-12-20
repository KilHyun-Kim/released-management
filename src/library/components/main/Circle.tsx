import styled from 'styled-components';
import React from 'react';

const Circle = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  border-radius: 50%;
  background-color: #c4c4c4;
  text-align: center;
  display: flex;
  // justify-content: center;
  // align-items: center;
`;

/** @component */
export default Circle;


// import styled from 'styled-components';
// import React from 'react';

// interface Circle{
//   color : string;
// }

// const Circle = (color = '#c4c4c4') => styled.div<Circle>`
//   width: 70px;
//   height: 70px;
//   position: relative;
//   border-radius: 50%;
//   background-color: ${color};
//   text-align: center;
//   display: flex;

//   // justify-content: center;
//   // align-items: center;
// `;

// /** @component */
// export default Circle;
