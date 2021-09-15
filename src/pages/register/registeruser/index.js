import React from "react";
import "./Register.css";
import Button from "../../../components/button/Button";
import Inputs from "../../../components/inputs/Inputs";
import {UserApi} from "../../../api/api_user";
import { Link } from "react-router-dom";
function Register(){
    const addUser = async (event)=>{
        event.preventDefault();
        const user = {
            user_name: event.target.input_name.value,
            user_pass: event.target.input_pass.value,
            user_email: event.target.input_email.value,
            user_age: event.target.input_age.value,
        }
        try {
            const response = await UserApi.fetchPost(user);
            const data = await response;
            console.log(data)
            event.target.appendChild(
                <Alert variant="success" >
                    <Alert.Heading>
                        Sucess!!!
                    </Alert.Heading>
                    <hr/>
                    <p>
                        Your User has ben created in Date.now()
                    </p>
                </Alert>
            );
          } catch (error) {
            return (<Alert message={error} description={Date.now()} />);
            
          }

    }
    return(
        <div className="register">
        <form className="register-form" onSubmit={addUser}>  
            <h2>User Register</h2>
            <Inputs type="text" holder="Enter With Your First Name" inputname="input_name"/>
            <Inputs type="text" holder="Enter With Your Age" inputname="input_age"/>
            <Inputs type="text" holder="How do you go to use this?" inputname="input_use"/>
            <Inputs type="email" holder="Enter With Your E-mail" inputname="input_email"/>
            <Inputs type="password" holder="Enter With Your Password" inputname="input_pass"/>
            <Button >
                Register
            </Button>
        </form>
            <Link to="/"> Cancelar</Link>
        </div>
    );
}
export default Register;