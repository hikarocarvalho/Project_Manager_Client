import React from "react";
import "./NotFound.css";
import pageerror from "./pageerror.png";
function NotFound(){
    return(
        <img className="error" alt="page error" src={pageerror}>
        </img>
    );
}
export default NotFound;