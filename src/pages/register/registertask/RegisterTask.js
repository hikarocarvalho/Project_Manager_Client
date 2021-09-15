import React,{useState,useEffect} from "react";
import "./RegisterTask.css";
import Button from "../../../components/button/Button";
import Inputs from "../../../components/inputs/Inputs";
import { useParams } from "react-router";
import { TasksApi } from "../../../api/api_tasks";

function RegisterTask(){
    const [display,setdisplay] = useState(false);
    useEffect(()=>{
    },[display])
    const projectid = useParams().projectid;
    const userid = useParams().userid;
    const addTask = async(event)=>{
        event.preventDefault();
        
        const newtask = {
            task_name: event.target.input_title.value,
            task_description: event.target.input_description.value,
            task_priority: event.target.input_priority.value,
            task_final_date: event.target.input_date.value,
            project_id: projectid,
            state_name: event.target.input_state.value
        }

        try {
            const response = await TasksApi.fetchPost(newtask);
            const data = await response;
            if(response.status===200){
                console.log(data)
                window.location.href="/tasks/"+projectid+"/"+userid;
            }
            } catch (error) {
                const message_response = (<p style={{backgroundColor:"rgba(255, 126, 126,0.5)"}}>Servidor Fora do ar ou dados incorretos</p>);
                setdisplay({display:true,message:message_response});
            }
    }
    return(
        <form className="register-project" onSubmit={addTask}>  
            <h2>Register Task</h2>
            
            <Inputs type="text" holder="Enter With the title of the task" inputname="input_title"/>
            <Inputs type="text" holder="Enter With the description of task" inputname="input_description"/>
            <Inputs type="datetime-local" value="2017-06-01T08:30" holder="enter with the date of project" inputname="input_date"/>
            <label for="input_priority">Select the priority of the task</label>
            <select name="input_priority">
                <option value="High">High</option>
                <option value="Midle">Midle</option>
                <option value="Low">Low</option>
            </select>
            <label for="input_priority">Select the state of the task</label>
            <select name="input_state">
                <option value="to-do">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <Button >
                Register
            </Button>
            {display.display?<div className="alert" id="alert">{display.message}</div>:null}
            
        </form>

    );
}
export default RegisterTask;