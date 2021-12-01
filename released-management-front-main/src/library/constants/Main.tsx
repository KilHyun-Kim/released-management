import Circle from 'library/components/main/Circle';
import React, { Component } from 'react';
import styled from 'styled-components';

const Radiusbox = styled.div`
  width: 334px;
  height: 98px;
  border-radius: 50px;
  font-size: 12px;
  color: #000000;
  display: flex;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  ::placeholder {
    color: #000000 Solid;
    font-family: Roboto;
    font-style: Regular;
    font-size: 12px;
    position: relative;
  }
`;

// const Circle = styled.div`
//   width: 334px;
//   height: 98px;
//   border-radius: 50px;

//   font-size: 12px;
//   color: #000000;
//   display: flex;
//   box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
//   ::placeholder {
//     color: #000000 Solid;
//     font-family: Roboto;
//     font-style: Regular;
//     font-size: 12px;
//     position: relative;
//   }
// `;

class Main extends Component {
  render() {
    const circle_count = [1, 2, 3, 4, 5];
    return (
      <>
        <div style={styles.container}>
          {circle_count.map((value) => (
            <div key={value} style={styles.in_div}>
              <Circle />
              <div>{value}</div>
            </div>
          ))}
        </div>
        <Radiusbox>
          {circle_count.map((value) => (
            <div key={value} style={styles.in_div}>
              <Circle />
              <div>{value}</div>
            </div>
          ))}
        </Radiusbox>
      </>
    );
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  wrap: {
    width: '100%',
  },
  container: {
    height: '100px',
    position: 'relative',
    display: 'flex',
    top: 20,
  },
  in_div: {
    width: 70,
    height: 100,
    marginLeft: '10px',
  },
} as const;

export default Main;
