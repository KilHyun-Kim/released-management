import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'main/store/createStore';

export default function ComboBox(props:any) {
  const [filter, setFilter] = useState<any>("");
  const dataList = props.data;

  useEffect(() => {
    console.log("filter : ", filter)
  },[filter])

  function onClick(event : any){
    console.log("click : ", event)
  }

  return (
    <div style={{ position: "relative", left: 120}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dataList}
        getOptionLabel={(option : any) => option.name}
        sx={{ width: 350 }}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter') {
            console.log("Enter@@@@")
          }
        }}
        onChange={(event:any) => {
          setFilter(event.target.textContent)
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