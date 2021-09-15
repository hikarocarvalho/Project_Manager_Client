import React,{useEffect,useState} from "react";
import "./Projects.css"
import MenuBar from "./../../components/menubar/MenuBar";
import BoxComponents from "./../../components/boxcomponents/BoxComponents";
import BoxItem from "../../components/boxitem/BoxItem";
import { ProjectApi } from "../../api/api_projects";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import DateTransform from "./../../tools/DateTransform";


function Projects(){
    const [projects,setprojects] = useState([]);
    
    useEffect(()=>{
        getproject();
    },[])
    const userid= useParams().userid;

    const getproject = async ()=>{

        const response = await ProjectApi.fetchByUser(userid);
        console.log(response);
        const data = await response.json();
        setprojects(data);
    }
    return(
        <div className="page">
            <MenuBar id="menutitle" title="Projects"/>
            <BoxComponents>
                {projects.map((project,index)=>(
                    <Link to={`/tasks/${project._id}/${userid}`} className="boxitem-link">
                        <BoxItem key={project._id} className="boxitem" >
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
                        </BoxItem>
                    </Link>
                ))}
                <Link to={"/projects/registerproject/"+userid} className="boxitem-link">
                <BoxItem className="boxitem" >
                    <div className="description">
                        <label className="add">+</label>
                    </div>
                </BoxItem>
                </Link>
            
            </BoxComponents>
        </div>
        
    );
}
export default Projects;