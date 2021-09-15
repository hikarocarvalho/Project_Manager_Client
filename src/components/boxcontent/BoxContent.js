import React from "react";
import "./BoxItem.css";
import { Link } from "react-router-dom";
import dateTransform from "../../tools/DateTransform";

const BoxItem = (props) => {
   const project = props.project;
   console.log(project._id)
    return(
        <Link to={`/tasks/${project._id}`} className="boxitem-link">
            <article id={project._id} className="boxitem">
                <header className="title">
                    {project.project_title}
                </header>
                <div className="description">
                    <hr/>
                        {project.project_description}
                    <hr/>
                        this project has be created at: - 
                        {dateTransform(project.project_date)}
                    <hr/>
                        this project have to be done at: - 
                        {dateTransform(project.project_final_date)}
                </div>
            </article>
        </Link>
    );
}
export default BoxItem;