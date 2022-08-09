import React,{useEffect,useState,useMemo} from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

import './floor.css'
interface FloorStatus  {
  stock:boolean
}
function Floor({stock}:FloorStatus) {

  const Fetch = async ()=>{
    const {data} = await  axios.get('socket://10.10.1.136:80/socket')
    console.log(data);
    
     }
   const FloorList : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  useMemo(() => Fetch, [])

//   useEffect(() => {
//  Fetch()
//   }, [])
  
  return (
  <div>

    {/* <button onClick={Fetch}>Req</button> */}
{/* {
  stock != false ? <div>test r</div> :   <div className='buttom-content'>

<Button variant="outlined" color="primary">
  not value
</Button>

<Button variant="contained" color="primary">
  Success
</Button>
  </div>
} */}
 <div className='buttom-content'>
{FloorList.map(el=>{
  return(
<div>
<Button variant="outlined" color="warning" className='btn_floor' style={{backgroundColor:'#ff971d' , color:'white'}}>
    Success {el}
  </Button>
  </div>
  )
})}
  </div>
  </div>
  );
}

export default React.memo(Floor)