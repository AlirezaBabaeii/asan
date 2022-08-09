import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import dotenv from 'dotenv'
import Drawerinfo from "./component/infodrawer/index";
import Sidebar from "./component/switch/switch";
import Floor from "./component/floor/floor";
import TestComponent from "./component/test";
import "./App.css";
// const Urlapi = process.env.TEST
import Pules from './component/pules/indexx'
// import Pules from 'react-pulse-dot'
// import { io } from "socket.io-client";
function App() {
  const [jacheith,setjacheith] = useState<number>(0)
  // const socket = io("127.0.0.1:3100");
  const ws = new WebSocket('ws://10.10.1.136:80/socket')
  useEffect(() => {
    // console.log(dotenv.parse);
    
    ws.onopen = function (event) {
      console.log('connect',event);
      ws.onmessage = function (events) {
        setjacheith(events.data)
     
        // setjacheith(events.data , )
        // console.log(jacheith,'data logs');
        
      }
    };
    // io.conn
    // socket.on("connect", (data): any => void {
    //   s
    // });
    if(jacheith === 99){
      ws.close()
    }
  }, []);

  return (
    <div className="wapper-main">
      <div className="left">
        <div className="buttom-left">
          <div className="sidebar-content-l">
            <div className="slider-top">
              <Sidebar />
            </div>
            <div className="slider-buttom">
              <Sidebar />
            </div>
          </div>
          <div className="buttom-content">
            <Floor stock={false} />
            {/* <TestComponent/> */}
          </div>
        </div>

        <div className="buttom-right">
          <div className="sidebar-content">
            <div className="slider-top">
              <Sidebar />
            </div>
            <div className="slider-buttom">
              <Sidebar />
            </div>
          </div>
          <div className="buttom-content">
            <Floor stock={false} />
          </div>
        </div>
        <div className="buttom-dow">
          <div className="jack-drawer" style={{top:`${jacheith}%`}} >
            {jacheith}
            <div className="drawer-left">
              <Pules/>
            </div>
            <div className="drawe-right"></div>
          </div>
        </div>
      </div>

      <div className="right">
        <Drawerinfo />
      </div>
    </div>
  );
}

export default App;
