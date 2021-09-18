import React,{useState,useEffect} from "react";
import "./BoxItem.css";
import Modal from "./../../components/modal/Modal";
import { ProjectApi } from "../../api/api_projects";
import DateTransform from "./../../tools/DateTransform";
import { Link } from "react-router-dom";

const BoxItem = (props) => {
    const [open,setOpen] = useState(false);
    const project = props.project;
    const userid = props.userid;
    const cancel = ()=>{
        console.log(cancel);
        setOpen(false);
    };
    const remove = ()=>{
        setOpen(true);
    };
    const exclude = async()=>{
        const response = await ProjectApi.fetchDelete(project._id);
        const data = await response;
        console.log(data[0])
        setOpen(false);
        window.location.reload();
    };
   
    return(
            <article className="boxitem-link">
                <Link to={`/tasks/${project._id}/${userid}`} className="box">
                        
                        <header className="titleproject">
                           
                            {project.project_title}
                            {project.project_priority==="High"?
                            (<div className="red"></div>):project.project_priority==="Midle"?
                            (<div className="yellow"></div>):project.project_priority==="Low"?
                            (<div className="green"></div>):null}
                            
                        </header>
                        <div className="description">
                            <hr/>
                                {project.project_description}
                            <hr/>
                                this project has be created at:
                                <br/>
                                  
                                {DateTransform(project.project_date)}
                            <hr/>
                                this project have to be done at:
                                <br/>
                                  
                                {DateTransform(project.project_final_date)}
                        </div>
                        
                    </Link>
                     <button className="trash"  onClick={remove} ></button>
                     {open?
                        <Modal>
                            <header>Do you really want to exclude this?</header>
                            <a href="#" onClick={exclude} className="confirm">Yes</a>
                            <a href="#" onClick={cancel} className="cancel">No</a>
                        </Modal>
                    :null}
            </article>
       
    );
}
export default BoxItem;