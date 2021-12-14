import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'main/store/createStore';

export default function ComboBox(props:any) {
  const top100Films = props.data;

  function onChange(event : any){
    console.log("change: ", event);
  }

  function onClick(event : any){
    console.log("click : ", event)
  }

  return (
    <div style={{ position: "relative", left: 120}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option : any) => option.name}
        sx={{ width: 350 }}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter') {
            console.log("Enter@@@@")
          }
        }}
        onInputChange={(event:any) => {
          console.log("Input change : ", event)
        }}
        renderInput={(params) => <TextField {...params} label="Tech" />}
      />
      <SearchOutlinedIcon 
      style={{ position: "relative", bottom: 40, left: 40, cursor: "pointer"}}
      onClick={onClick}
      id = "search"
      />
    </div>
  );
}