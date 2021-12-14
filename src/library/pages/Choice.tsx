import React, { Component, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {data, visible, setTech, fetchList, selectData} from '../reducers/tech/techSlice'
import Circle from '../components/main/Circle';
import { request } from '../../main/axios/Http';
import styled, { css } from 'styled-components';
import ComboBox from '../components/main/mul/ComboBox'
import { createSelector } from '@reduxjs/toolkit';

function division(n:any, arr:Array<any>) {
    const arr_temp = JSON.parse(JSON.stringify(arr));
    const len = arr_temp.length;
    const cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
    const tmp = [];
  
    if(arr_temp.length > 0){
      arr_temp.map((item : any, index : number) => {
        arr_temp[index] = item
      })
  
      for (let i = 0; i < cnt; i++) {
        tmp.push(arr_temp.splice(0, n));
      }
    }
    
    return tmp;
  }

const getMainFilter = createSelector(selectData, data => {
  return division(3, data)
});

export function Choice(){
  const data_selector: Array<any> = useSelector(data);
  const filterlist: Array<any> = useSelector(getMainFilter)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList({name: "React"}));
  }, [dispatch]);
  /* useEffect(() => {
    async function fetchTech() {
      const data= await request("GET", "/techs");
      console.log(data);
    }
    fetchTech();
  },[]) */
  // ** 
  //temp count
  // const circle_count = [['React', 'Vue', 'Angular'], ['Spring', 'Go', 'Node'], ['Figma', 'Trello', 'Jira']];
  return (
    <div style={styles.root}>
      <div style={styles.wrap}>
        <ComboBox data={data_selector}/>
      </div>
      <div style={styles.container}>
        {filterlist.map((value, index1) => (
          <div key={index1} style={styles.circlewrap}>
            {value.map((value1 : any, index2: number) => (
              <div key={index2}>
                {index2 == 1 ? <Circle style={styles.marginside}/> : <Circle />}
                <div>{value1["name"]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
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
