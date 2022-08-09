import React from 'react'
import './index.css'
import {Empts} from '../icon/empt'
import { Button } from '@mui/material'
export default function index() {
  return (
    <div className='info-side-wapper'>
        <Empts/>
        <Button variant='contained' color='success' sx={{width:'20%',height:'5%'}}>Add</Button>
    </div>
  )
}
