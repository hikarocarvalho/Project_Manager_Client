import React from "react";
// import library for routes
// importando bibliotecas para rotas
import { Switch,Route} from "react-router-dom";
// import pages for routes
// importando paginas para rotas
import Login from "./pages/login";
import Register from "./pages/register/registeruser";
import Tasks from "./pages/tasks";
import Projects from "./pages/projects";
import NotFound from "./pages/notfound";
import RegisterProject from "./pages/register/registerproject";
import RegisterTask from "./pages/register/registertask/RegisterTask";

export default function Routes(){
    return(
       
            <Switch>
                <Route exact={true} path="/" component={Login}/>
                <Route exact={true} path="/register" component={Register}/>
                <Route exact={true} path="/projects/:userid" component={Projects}/>
                <Route exact={true} path="/projects/registerproject/:userid" component={RegisterProject}/>
                <Route exact={true} path="/tasks/:id/:iduser" component={Tasks}/>
                <Route exact={true} path="/tasks/registertask/:projectid/:userid" component={RegisterTask}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        
    );
}