import React,{useEffect,useState} from "react";
import "./Tasks.css";
import { TasksApi } from "./../../api/api_tasks";
import { useParams } from "react-router";
import MenuBar from "./../../components/menubar/MenuBar";
import { ProjectApi } from "./../../api/api_projects";
import StepBox from "./../../components/stepbox/StepBox";
import TaskItem from "./../../components/taskitem/TaskItem";
import { Link } from "react-router-dom";
function Tasks(){
    const [title,settitle] = useState("");
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        gettask();
    },[]);
    
   
    const idproject = useParams();
    const iduser = useParams().iduser;
    const setname=async()=>{
        const response = await ProjectApi.fetchGetById(idproject.id);
        const data = await response.json();        
        const project = data[0].project_title;
        settitle(project)
        
    }
    setname();
    const gettask = async ()=>{
        console.log(idproject.id);
        const response = await TasksApi.fetchGet(idproject.id);
        const data = await response.json();
        console.log(data);
        setTasks(data);
    }  
   
     /*
        section for the three types of tasks (to-do, doing and done)
        and all tasks one by one of types
    */
    return(
        <div className="page-tasks">           
            <MenuBar id="menutitle" title={title}>
            <Link to={"/projects/"+iduser} className="return">
                Return to Projects
            </Link>
            </MenuBar>
                    <StepBox title="To Do" idproject={idproject} userid={iduser}>
                        {tasks.map((task,index)=>{
                            if(task.state_name==="to-do"){
                                return(<TaskItem key={task._id} itemObject={task} projectid={idproject.id} userid={iduser}/>);
                            }
                            return(null);
                        })}
                    </StepBox>
                    <StepBox title="Doing" idproject={idproject} userid={iduser}>
                        {tasks.map((task,index)=>{
                            if(task.state_name==="doing"){
                                return(<TaskItem key={task._id} itemObject={task} projectid={idproject.id} userid={iduser} />);
                            }
                            return(null);
                        })}
                    </StepBox>
                    <StepBox title="Done" idproject={idproject} userid={iduser}>
                        {tasks.map((task,index)=>{
                            if(task.state_name==="done"){
                                return(<TaskItem key={task._id} itemObject={task} projectid={idproject.id} userid={iduser} />);
                            }
                            return(null);
                        })}
                    </StepBox>
                
        </div>
        
    );
}
export default Tasks;