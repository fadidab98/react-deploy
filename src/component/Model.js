import React,{useState} from 'react'
import {useStateValue} from '../StateProvider';
import "../App.css" ;
import {actionTypes} from '../Reducer';

function Model({closeModal}) {
    const [users,setUsers]=useState({name:"",email:"",password:""});
    const[{ user },dispatch]= useStateValue();
    const {error,setError}= useState("");
    const [showCreated,setShowCreated] =useState(false);
    const [allUser,setAllUser] = useState([]);
    
    const submitHandler = (e) =>{
      e.preventDefault();
      
         /* check if no email like this email in user store(initialstate) */
console.log(allUser);

        if(users.email != user.email){
        dispatch({
            type:actionTypes.SET_USER,
            user:users
        })
        console.log(user)
        setShowCreated(true);
        
    } 
   
    }
   
    return (
        (showCreated ===false)?(
       <div className="signIn">
            <form  >
            
      <div class="form-group">
       <label for="exampleInputEmail1">name</label>
       <input type="text"
       required
        className="form-control"
         id="exampleInputEmail1"
       aria-describedby="emailHelp"
       onChange={e=>setUsers({...users, name:e.target.value}) } 
       value={users.name}
       />
  
  </div>
{/*   <div className="form-group">
    <label for="exampleInputEmail1">birthday</label>
    <input type="date"
     className="form-control"
      id="exampleInputEmail1"
       aria-describedby="emailHelp"
       onChange={e=>setUser({...users, password:e.target.value}) } 
       value={users.password}
       />
  
  </div> */}
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email"
     className="form-control"
     onChange={e=>setUsers({...users, email:e.target.value}) } 
       value={users.email}
      id="exampleInputEmail7"
       aria-describedby="emailHelp"
       
       />
  
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"
     onChange={e=>setUsers({...users, password:e.target.value}) } 
     value={users.password}
    
    id="exampleInwputPassword1"
    />
  </div>
  
  <button type="submit" onClick={submitHandler} className="btn btn-primary">Submit</button>
  <button  className="btn btn-danger" onClick={ closeModal }>Cancel</button>
</form>
            
        </div>):(

<div className="signIn pt-3">
<form className="text-center pt-5">
  <div className="text-center mb-3 pt-3">
    <span className="bg-success py-3 px-3 rounded-pill text-white "> <i class="fa fa-check" aria-hidden="true"></i></span>

</div>
<h2 >your account created</h2> 
<botton className="btn btn-primary " onClick={ closeModal } >Login Now</botton>
</form>
       </div>

       )

    )
}

export default Model
