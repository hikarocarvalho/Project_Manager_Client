import React,{useEffect,useState} from "react";
import "./Projects.css"
import MenuBar from "./../../components/menubar/MenuBar";
import BoxComponents from "./../../components/boxcomponents/BoxComponents";
import BoxItem from "../../components/boxitem/BoxItem";
import { ProjectApi } from "../../api/api_projects";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DateTransform from "./../../tools/DateTransform";
import { useHistory } from "react-router-dom";
import Modal from "./../../components/modal/Modal";
function Projects(){
    const history = useHistory();
    const [projects,setprojects] = useState([]);
    const [open,setOpen] = useState(false);
    
    useEffect(()=>{
        getproject();
    },[])
     const remove = ()=>{
        setOpen(true);
    };
    const exclude = async(id)=>{
        const response = await ProjectApi.fetchDelete(id);
        const data = await response;
        console.log(data[0])
        setOpen(false);
        window.location.reload();
    };
    const cancel = ()=>{
        console.log(cancel);
        setOpen(false);
    };
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
                    <BoxItem key={project._id} className="boxitem" >
                    <Link to={`/tasks/${project._id}/${userid}`} className="boxitem-link">
                        
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
                     <button className="trash" onClick={remove()}  ></button>
                     {open?
                        <Modal>
                            <header>Do you really want to exclude this?</header>
                            <a href="#" onClick={exclude(project._id)} className="confirm">Yes</a>
                            <a href="#" onClick={cancel} className="cancel">No</a>
                        </Modal>
                    :null}
                     </BoxItem>
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