import React, { Component } from 'react';
import InputBox from '../components/main/InputBox';
import Circle from '../components/main/Circle';
import styled, { css } from 'styled-components';

class Choice extends React.Component {
  render() {
    //temp count
    const circle_count = [['React', 'Vue', 'Angular'], ['Spring', 'Go', 'Node'], ['Figma', 'Trello', 'Jira']];
    return (
      <div style={styles.root}>
        <div style={styles.wrap}>
          <InputBox placeholder="Search Input" />
        </div>
        <div style={styles.container}>
          {circle_count.map((value, index1) => (
            <div key={index1} style={styles.circlewrap}>
              {value.map((value1, index2) => (
                <div key={index2}>
                  {index2 == 1 ? <Circle style={styles.marginside}/> : <Circle />}
                  <div>{value1}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles: { [key: string]: React.CSSProperties} = {
  root:{
    width: '648px',
    height: '380px',
    position: 'relative',
    display: 'block',
    top: '20px',
    marginLeft: '32%'
  },
  wrap: {
    width: '100%',
  },
  container: {
    height: '300px',
    width: '300px',
    position: 'relative',
    display: 'block',
    marginLeft: '155px',
    top: '20px',
  },
  in_div: {
    width: 70,
    height: 100,
    marginLeft: '15px'
  },
  circlewrap: {
    width: '633px',
    height: '100px',
    position: 'relative',
    display: 'flex',
  },
  marginside:{
    marginLeft: '40px',
    marginRight: '40px',
  }
} as const;

export default Choice;
