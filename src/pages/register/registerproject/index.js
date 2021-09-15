import React,{useState,useEffect} from "react";
import "./RegisterProject.css";
import Button from "../../../components/button/Button";
import Inputs from "../../../components/inputs/Inputs";
import { useParams } from "react-router";
import { ProjectApi } from "../../../api/api_projects";

function RegisterProject(){
    const [display,setdisplay] = useState(false);
    useEffect(()=>{
    },[display])
    const userid = useParams().userid;
    const addProject = async(event)=>{
        event.preventDefault();
        
        const newproject = {
            project_title: event.target.input_title.value,
            user_id: userid,
            project_description: event.target.input_description.value,
            project_final_date: event.target.input_date.value,
            project_priority: event.target.input_priority.value,
        }

        try {
            const response = await ProjectApi.fetchPost(newproject);
            const data = await response;
            if(response.status===200){
                console.log(data)
                window.location.href="/projects/"+userid;
            }
            } catch (error) {
                const message_response = (<p style={{backgroundColor:"rgba(255, 126, 126,0.5)"}}>Servidor Fora do ar ou dados incorretos</p>);
                setdisplay({display:true,message:message_response});
            }
    }
    return(
        <form className="register-project" onSubmit={addProject}>  
            <h2>Register Project</h2>
            
            <Inputs type="text" holder="Enter With the title of project" inputname="input_title"/>
            <Inputs type="text" holder="Enter With the description of project" inputname="input_description"/>
            <Inputs type="datetime-local" value="2017-06-01T08:30" holder="enter with the date of project" inputname="input_date"/>
            <select name="input_priority">
                <option value="High">High</option>
                <option value="Midle">Midle</option>
                <option value="Low">Low</option>
            </select>
            <Button >
                Register
            </Button>
            {display.display?<div className="alert" id="alert">{display.message}</div>:null}
            
        </form>

    );
}
export default RegisterProject;