import React, { useEffect } from "react";
import "./EditForm.css";
import Inputs from "./../inputs/Inputs";
import Button from "./../button/Button";
import { TasksApi } from "../../api/api_tasks";

const EditForm = ({title,description,id,date,priority,state}) => {
   
    
    return(
        <fieldset>
            <h2>Edit Task</h2>
            <Inputs type="hidden" value={id}></Inputs>
            <Inputs type="text" value={title} holder="Enter With the title of the task" inputname="input_title"/>
            <Inputs type="text" value={description} holder="Enter With the description of task" inputname="input_description"/>
            <Inputs className="input" type="datetime-local" value={date.substring(0, 16)} inputname="input_date"/>
            <label htmlFor="input_priority">Select the priority of the task</label>
            <select name="input_priority" defaultValue={priority}>
                <option value="High">High</option>
                <option value="Midle">Midle</option>
                <option value="Low">Low</option>
            </select>
            <label htmlFor="input_priority">Select the state of the task</label>
            <select name="input_state" defaultValue={state}>
                <option value="to-do">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
        </fieldset>    
            
    );
}
export default EditForm;