import React, { useEffect } from "react";
import "../style/resuld.css";
import { useSelector } from "react-redux";
import { count } from "../Reducer/Scrose";
const Resuld = () => {
  const data=useSelector((state)=>state.count.total)
  console.log(data)
  useEffect(()=>{
count()
  },[count])
  return (
    <div>
      <div className="resuld-box">
        <div className="resuld-header">
          <h1>Your Total Score is </h1>
          <h3 className="score">10/{data}</h3>
        </div>
      </div>
    </div>
  );
};

export default Resuld;
