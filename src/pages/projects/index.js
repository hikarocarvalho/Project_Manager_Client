import React,{useEffect,useState} from "react";
import "./Projects.css"
import MenuBar from "./../../components/menubar/MenuBar";
import BoxComponents from "./../../components/boxcomponents/BoxComponents";
import BoxItem from "../../components/boxitem/BoxItem";
import { ProjectApi } from "../../api/api_projects";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Projects(){
    const [projects,setprojects] = useState([]);
   
    
    useEffect(()=>{
        getproject();
    },[])
    
   
    const userid= useParams().userid;

    const getproject = async ()=>{
        try{
            const response = await ProjectApi.fetchByUser(userid);
            if(response.status === 200){
                console.log(response);
                const data = await response.json();
                setprojects(data);
                console.log(data);
            }else{
                console.log("erro");
            }
            
        }catch(error){
            console.log("error");
        }
    }
    
    return(
        <div className="page">
            <MenuBar id="menutitle" title="Projects"/>
            <BoxComponents>
                {projects.map((project,index)=>(
                    <BoxItem key={project._id} project={project} className="boxitem" userid={userid}>
                    

                     </BoxItem>
                ))}
                <Link to={"/projects/registerproject/"+userid} className="boxitem-link">
                
                    <div className="description">
                        <label className="add">+</label>
                    </div>
              
                </Link>
                
               
            </BoxComponents>
        </div>
        
    );
}
export default Projects;