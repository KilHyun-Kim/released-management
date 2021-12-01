import React, { Component } from 'react';
import InputBox from '../components/main/InputBox';
import Circle from '../components/main/Circle';
import styled, { css } from 'styled-components';

class Choice extends React.Component {
  render() {
    //temp count
    const circle_count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <>
        <div style={styles.container}>
          <InputBox placeholder="Search Input" />
        </div>
        <div style={styles.container}>
          {circle_count.map((value) => (
            <div key={value} style={styles.in_div}>
              <Circle />
              <div>{value}</div>
            </div>
          ))}
        </div>
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
  },
} as const;

export default Choice;
