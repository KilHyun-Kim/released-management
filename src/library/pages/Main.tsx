import Circle from 'library/components/main/Circle';
import React, { Component } from 'react';
import styled from 'styled-components';

const Radiusbox = styled.div`
  width: 334px;
  height: 98px;
  border-radius: 50px;
  border: 1px solid #000000;
  font-size: 12px;
  color: #000000;
  display: flex;
  // box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  margin-left: 40%;
  z-index:2;
  position: relative;
  background-color: white;
  ::placeholder {
    color: #000000 Solid;
    font-family: Roboto;
    font-style: Regular;
    font-size: 12px;
    position: relative;
  }
`;
const Maindiv = styled.div`
  width: 335px;
  height: 647px;
  border-radius: 30px;
  margin-left: 40%;
  position: relative;
  bottom: 38px;
  z-index:1;
`;

const Bigradiusbox = styled.div`
  width: 335px;
  height: 143px;
  background-color: #C4C4C4;
  border-radius: 30px;
  // border: 1px solid #000000;
  font-size: 12px;
  color: #000000;
  display: flex;
  ::placeholder {
    color: #000000 Solid;
    font-family: Roboto;
    font-style: Regular;
    font-size: 12px;
    position: relative;
  }
`;

const Minicircle = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
  background-color: #c4c4c4;
  text-align: center;
  display: flex;
  left: 3px;
  // justify-content: center;
  // align-items: center;
`;

class Main extends Component {
  render() {
    const circle_count = ['React', 'Vue', 'Node', 'Python', 'Go'];
    const radiusbox = [1, 2, 3, 4]
    return (
      <>
        <div style={styles.container}>
          {circle_count.map((value, index) => (
            <div key={index} style={styles.circlediv}>
              <Circle />
              <div>{value}</div>
            </div>
          ))}
        </div>
        <Radiusbox>
          {circle_count.map((value, index) => (
            <div key={index} style={styles.minicirclediv}>
              <Minicircle />
              <div>{value}</div>
            </div>
          ))}
        </Radiusbox>
        <Maindiv>
            {
              radiusbox.map((value) => (
                <div key={value} style={styles.radiusbox}>
                  <Bigradiusbox />
                </div>
              ))
            }
        </Maindiv>
      </>
    );
  }
}

const styles: { [key: string]: React.CSSProperties } = {
  wrap: {
    width: '100%',
  },
  container: {
    height: '120px',
    position: 'relative',
    display: 'flex',
    // top: '20px',
    marginLeft: '38%',
  },
  circlediv: {
    width: '70px',
    height: '90px',
    marginLeft: '10px',
    marginTop: '25px',
  },
  minicirclediv: {
    width: '62px',
    height: '74px',
    marginLeft: '10px',
    marginTop: '25px',
  },
  radiusbox:{
    position: 'relative',
    marginTop: '25px',
  }
} as const;

export default Main;
