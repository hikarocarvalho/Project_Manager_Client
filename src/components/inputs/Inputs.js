import React from "react";
import "./Inputs.css";

const Inputs = ({type,holder,inputname,value=""}) => (
    <input className="input" type={type} placeholder={holder} defaultValue={value} name={inputname}></input>
)
export default Inputs;