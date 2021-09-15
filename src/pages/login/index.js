import React, { useEffect ,useState} from "react";
import "./Login.css";
import logo from "./logo.png";
import Button from "../../components/button/Button";
import Inputs from "../../components/inputs/Inputs";
import { UserApi } from "../../api/api_user";
import { Link } from "react-router-dom";

function Login(){
  const [display,setdisplay] = useState(false);
  useEffect(()=>{
  },[display])
  const logar = async (event)=>{
       event.preventDefault();
        const pass = event.target.input_pass.value;
        const email = event.target.input_email.value;
        const user = pass+"/"+email;
          try {
            const response = await UserApi.fetchGetLogin(user);
            const data = await response.json();
            if(response.status===200){
                window.location.href="/projects/"+data[0]._id;
              }
          } catch (error) {
            const message_response = (<p style={{backgroundColor:"rgba(255, 126, 126,0.5)"}}>Servidor Fora do ar ou dados incorretos</p>);
              setdisplay({display:true,message:message_response});
          }
    }

    return(
      <div className="login">
        <form className="login-form" onSubmit={logar}> 
            <img className="logo" alt="logo" src={logo}/>
            <h2>User Login</h2>
            <Inputs type="email" holder="example@domine.com" inputname="input_email"/>
            <Inputs type="password" holder="1111111" inputname="input_pass"/>
           <Button id="button" type="submit">Login</Button>
            {display.display?<div className="alert" id="alert">{display.message}</div>:null}
            
        </form>

        <Link to="/register">
        New Acount
        </Link>
       </div> 
    );
}
export default Login;