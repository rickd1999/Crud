import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";

const Login = ({Login , error}) => {
    const [details , setDetails] = useState({name:"" , email:"" , password:"" });
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return(
       <form onSubmit={submitHandler}>
        <div className="form-inner text-center">
            <h2>Login</h2>
            {(error != "")?(<div className="error">{error}</div>) :"" }
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div><br />
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div><br />
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div><br />
           <input type="submit" value="LOGIN"/>
            {/* <Link className="btn btn-primary btn-sm" value="LOGIN" to="/">Login</Link> */}
        </div>
       </form>
    )
}

export default Login;