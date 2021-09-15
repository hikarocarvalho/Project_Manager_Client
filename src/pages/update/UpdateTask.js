import React,{useState,useEffect} from "react";
import "./UpdateTask.css";
import Button from "./../../components/button/Button";
import Inputs from "./../../components/inputs/Inputs";
import { useParams } from "react-router";
import { TasksApi } from "./../../api/api_tasks";

function UpdateTask(){
    
    // geting the selected task

    const [tasksupdate,setTasksUpdate] = useState({});
    const [display,setdisplay] = useState(false);
    useEffect(()=>{
        gettask();
    },[]);
    useEffect(()=>{

    },[display]);
   
    const projectid = useParams().projectid;
    const taskid = useParams().taskid;
    const gettask = async ()=>{
        const response = await TasksApi.fetchGetById(taskid);
        const datatask = await response.json();
        setTasksUpdate({titulo:datatask[0].task_name});
        console.log(tasksupdate);
    }
   
    const updateTaskValues = async(event)=>{
        event.preventDefault();
        
        const newvaluestask = {
            task_name: event.target.input_title.value,
            task_description: event.target.input_description.value,
            task_priority: event.target.input_priority.value,
            task_final_date: event.target.input_date.value,
            project_id: projectid,
            state_name: event.target.input_state.value
        }

        try {
            const response = await TasksApi.fetchPut(newvaluestask,taskid);
            const data = await response;
            if(response.status===200){
                console.log(data)
                window.location.href="/tasks/"+projectid;
            }
            } catch (error) {
                const message_response = (<p style={{backgroundColor:"rgba(255, 126, 126,0.5)"}}>Servidor Fora do ar ou dados incorretos</p>);
                setdisplay({display:true,message:message_response});
            }
    }
    return(
       
        <form  className="register-project" onSubmit={updateTaskValues}> 
        
            <h2>Register Task</h2>
            <Inputs type="text" id="title" holder="Enter With the title of the task" inputname="input_title"/>
            <Inputs type="text" id="description" holder="Enter With the description of task" inputname="input_description"/>
            <Inputs type="datetime-local" id="date" holder="enter with the date of project" inputname="input_date"/>
            <label htmlFor="input_priority">Select the priority of the task</label>
            <select name="input_priority" id="priority">
                <option value="High">High</option>
                <option value="Midle">Midle</option>
                <option value="Low">Low</option>
            </select>
            <label htmlFor="input_priority">Select the state of the task</label>
            <select name="input_state" id="state">
                <option value="to-do">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            
            <Button >
                Register
            </Button>
    
           
        </form>
      
    );
}
export default UpdateTask;