import React from "react";
import "./BoxItem.css";

const BoxItem = ({children}) => {
   
    return(
            <article >
                {children}
            </article>
       
    );
}
export default BoxItem;