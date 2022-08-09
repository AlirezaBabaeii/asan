import React, { useState } from "react";
import "./index.css";
import { Empts } from "../icon/empt";
import { Button } from "@mui/material";
import { Available } from "../icon/Available";
export default function InfoFloor() {
  const [stockboxx, setstockboxx] = useState<boolean>(true);
  return (
    <div className="info-side-wapper">
      {stockboxx !== false ? (
        <div className="stock-true-wapper">
<h3 className="stock_true">پر</h3>
<Available/>
<Button variant="contained" color="info">
  خالی کردن
</Button>
        </div>
      ) : (
        <>
          <h3 className="empt-box">خالی</h3>
          <Empts />
          <Button
            variant="contained"
            color="success"
            sx={{ width: "20%", height: "5%" }}
          >
            Add
          </Button>
        </>
      )}
    </div>
  );
}
