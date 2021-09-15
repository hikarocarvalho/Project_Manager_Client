import React, { useEffect, useState } from "react";
import "./TaskItem.css";
import { TasksApi } from "../../api/api_tasks";
import DateTransform from "../../tools/DateTransform";
import Modal from "./../modal/Modal";
import EditForm from "../editform/EditForm";
import Button from "./../button/Button";
const TaskItem = ({itemObject,projectid}) => {
    const [item,setItem] = useState(itemObject);
    const [open,setOpen] = useState(false);
    const [edit,setedit] = useState(false);
    useEffect(()=>{
        setedit(false)
    },[open])
    useEffect(()=>{
        setOpen(false)
    },[edit])
    // start delete methods
    const remove = ()=>{
        setOpen(true);
    };
    const exclude = async()=>{
        const response = await TasksApi.fetchDelete(item._id);
        const data = await response;
        console.log(data[0])
        setOpen(false);
        window.location.reload();
    };
    const cancel = ()=>{
        console.log(cancel);
        setOpen(false);
    };
    //finish delete methods
    //start edit methods
    const edittask = ()=>{
        setedit(true);
    };
    const edittaskClose = ()=>{
        setedit(false);
    };
    const updateTask = async(e)=>{
        e.preventDefault();
    
        const tasknewvalues = {
            task_name: e.target.input_title.value,
            task_description: e.target.input_description.value,
            task_priority: e.target.input_priority.value,
            task_final_date: e.target.input_date.value,
            state_name: e.target.input_state.value,
        }
        
        try {
            const response = await TasksApi.fetchPut(tasknewvalues,item._id);
            const data = await response;
            if(response.status===200){
                console.log(data)
            }
            } catch (error) {
                console.log(error);
                
            }
           setedit(false); 
           window.location.reload();
    }
    //finish edit methods
    return(
            <article onSubmit={remove} className="item">
                <button className="edittask" onClick={edittask}>
                    <header value={item._id}>
                        {item.task_name}
                        <br/>
                        creadred in : {DateTransform(item.task_date)}
                        <br/>
                        final date to complete : {DateTransform(item.task_final_date)}
                        <br/>
                        {item.task_description}
                        <br/>
                        <div className="priority">
                            {item.task_priority==="High"?
                            (<div className="red"></div>):item.task_priority==="Midle"?
                            (<div className="yellow"></div>):item.task_priority==="Low"?
                            (<div className="green"></div>):null}
                            {item.task_priority}
                        </div>
                    </header>
                    </button>
                    <button className="trash" onClick={remove}></button>
                
                {open?
                    <Modal>
                        <header>Do you really want to exclude this?</header>
                        <a href="#" onClick={exclude} className="confirm">Yes</a>
                        <a href="#" onClick={cancel} className="cancel">No</a>
                    </Modal>
                :null}
                {edit?
                    <Modal>
                        <form  className="edit-project" onSubmit={updateTask}> 
                            <EditForm title={item.task_name} description={item.task_description} date={item.task_final_date}
                            priority={item.task_priority} state={item.state_name} id={item._id}></EditForm>
                            <button className="confirm">
                                Salve Changes
                            </button>
                        </form>    
                            <a onClick={edittaskClose} className="cancel"> cancel </a>
                    </Modal>
                   
                :null}
            </article>
       
    );
}
export default TaskItem;