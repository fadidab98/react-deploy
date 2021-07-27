import React,{useState} from 'react';
import Login from './component/Login'
import Home from './component/Home/Home1'
import {BrowserRouter as Router , Switch , Route , Link,NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStateValue } from "./StateProvider";
function App() {
  /* get user (initialstate) */
  const [{ user },dispatch]= useStateValue();
  /* No toggleNav is flase thats mean width:0px */
  const [show,setShow] = useState(false);
/* when user click logout he will move to Login Page */
  const logout = ()=>{
    window.location.reload();
    window.location.replace("http://localhost:3000/");
   setUsers({
    email:"",
    password:""
   });
   
  }
 /* store user details like name and password*/
  const [users,setUsers] = useState({email:"",password:"",name:""});
  const [error,setError]= useState("");
  const login = details=>{
 
    console.log(details);
         /* compare between user in store and Entered values */


 
      if(details.email == user.email && details.password == user.password ){
        console.log("Loggin");

        setUsers({
            name:user.name,
            email: details.email,
            password: details.password
        
        });
        console.log(user);

    }
    else{
        console.log("Details do not match");
        setError("Details do not match" );
    }

 
  }
 

  return (
    <div>
{
    
    (users.email !=="")?(

<Router>
   
<div>
    {/* if show true  toggle-nave width:300px else width:0px  */}
    <div className="toggle-nave" style={{width:(show)?("300px"):("0px")}}>
        <h2 className="text-center text-light pt-1 ">Settings</h2>
      <hr/>
        <ul>
        <li><a>profile</a></li>
        <li><a>Privacy</a></li>
        <li><button className="logout-btn" onClick={(logout)}>logout</button></li> 
           
        </ul>
    </div>
    {/* if show true navbar margin-left:300px else margin-left:0px  */}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-5" style={{backgroundColor:"#f7ca02",marginLeft:(show)?("300px"):("0px")}}>
        <button className="navbar-brand brand-titl " onClick={()=>setShow(!show)} style={{fontSize:"1.7rem" }} to="/"><span style={{fontSize:"1.9rem"}}>Fast</span>-Food</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto font-rubik wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <li className="nav-item active">
                    
                    <Link  className="nav-link text-center "  to="/">  Home  </Link>

                </li>
                <li className="nav-item active">
                    <Link  className="nav-link text-center"  to="/">Foods  </Link>
                   
                    
                </li>
                <li className="nav-item active">
                    <Link  className="nav-link text-center"  to="/">    About Us  </Link>
                   
                    
                </li>
               
               
               
                

            </ul>
          
            <div>
             
            </div>
 

          {/* display name from initialstate(user[name,email,password]) */}
            <p className="pt-3">{user.name}</p>
        </div>
    </nav>



   </div>
   
   
         <Switch>
             {/* parh user to Home page */}
         <Route path="/"  component={Home} exact/>
   
         </Switch>
   
   
   
   
   
   
   
   
         </Router>

    ):(<Login login={login} error={error} />)}
    
    </div>
  );
}

export default App;
