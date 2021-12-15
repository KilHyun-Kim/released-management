import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState, useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { RootState } from 'main/store/createStore';
import {data, selectData, filterData} from '../../../reducers/tech/techSlice'
import {setTech, setSelect, setFilter, fetchList, getMainFilter} from '../../../reducers/tech/techSlice'


export default function ComboBox(props:any) {
  const [tempfilter, setTempfilter] = useState<any>("");
  const dataList = props.data;
  const dispatch = useDispatch();
  const temp_obj:any = []
  useEffect(() => {
    //setFilter로 state의 filter 데이터를 변경시키는중
    //변경하고나서 해당하는 데이터를 Choice에서 사용해주면 된다.
    //filterData를 사용하면 되겟군
    dataList.forEach((item:any) => {
      if(item.name == tempfilter){
        temp_obj.push(item);
      }
    })
    dispatch(setFilter(temp_obj))
  },[tempfilter])

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
          setTempfilter(event.target.textContent)
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