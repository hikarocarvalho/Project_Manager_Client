import React from "react";
import "./StepBox.css";
import { Link } from "react-router-dom";

const StepBox = ({title,children,idproject,userid}) => {
    
    return(
            <article className="steps">
                <div className="boxtitle">
                    <header className="title">
                        {title}
                                              
                    </header>
                    <div className="add">
                            <Link to={`/tasks/registertask/${idproject.id}/${userid}`}>+</Link>
                    </div>
                </div>
                <div className="boxbody">
                 {children}
                </div>
            </article>
       
    );
}
export default StepBox;