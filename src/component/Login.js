
import React,{useState} from 'react';
import '../App.css';
import Modal from './Model'

function Login({login,error}) {
  /* to show Modale */
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

          const [details,setDetails]=useState({email:"",password:""});
          const submitHandler=e=>{
              e.preventDefault();
              login(details);
              console.log(details);
           
          }




         
    return (
    
            <div className="login-container">
           <form className="form-group" onSubmit={submitHandler}>
           {(error != "")?(<p class="text-danger text-center">{error}</p>): ""}
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email"
     className="form-control"
     id="exampleInputEmail1"
     aria-describedby="emailHelp"
     onChange={e=>setDetails({...details, email:e.target.value}) } 
      value={details.email}/>
     
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"
     className="form-control"
     id="exampleInputPassword1"
     onChange={e=>setDetails({...details,password:e.target.value})}
     value={details.password}
     
     />
  </div>
  
  <button type="submit" className="btn btn-primary my-3">Submit</button>
  <div className="border-top pt-2 ">
{!show && <button className="btn btn-primary p-1 m-2" onClick={openModal}>Create account</button>}
{/* props closeModal to modal  */}
        {show && <Modal closeModal={closeModal}/>}

         </div>
</form>


         </div>
   
        
     
    )
}

export default Login;
