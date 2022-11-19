import axios from "axios";
import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const AddUser = () => {
    let navigate = useNavigate();
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });
    const [ userErrors, setUserErrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false);
    const {name , username, email, phone, website} = user;
    const onInputChange = e =>{
        console.log(e);
         setUser ({...user,[e.target.name]: e.target.value})
    };
    const onSubmit= async e => {
     e.preventDefault();     
     setUserErrors(validate(user));
     setIsSubmit(true);
    };

    useEffect(()=> {
    if(Object.keys(userErrors).length === 0 && isSubmit){
        axios.post("http://localhost:3001/users",user);
        navigate("/");
    }},[userErrors, isSubmit]);   

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.name) {
           errors.name = "*Name is required"
        }
        if(!values.username) {
           errors.username = "*Username is required"
        }
        if(!values.email) {
           errors.email = "*email is required"
        }  else if (!regex.test(values.email)) {
            errors.email = "*This is not a valid email format!";
        }
        if(!values.phone) {
           errors.phone = "*phone number is required"
        }else if (values.phone.length < 10) {
            errors.phone = "*phone number must be 10 digits";
          } else if (values.phone.length > 10) {
            errors.phone = "*phone number cannot exceed more than 10 digits";
          }
        if(!values.website) {
           errors.website = "*website is required"
        }
        return errors;
    }
    
    return( 
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={e =>onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter your Name" name="name" value={name} onChange={(e)=> onInputChange(e)}/>
                    </div>
                    <p>{userErrors.name}</p>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter your UserName" name="username" value={username} onChange={(e)=> onInputChange(e)}/>
                    </div>
                    <p>{userErrors.username}</p>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter your E-mail Address" name="email" value={email} onChange={(e)=> onInputChange(e)}/>
                    </div>
                    <p>{userErrors.email}</p>
                    <div className="form-group">
                        <input type="number" className="form-control form-control-lg mb-2" placeholder="Enter your Phone Number" name="phone" value={phone} onChange={(e)=> onInputChange(e)}/>
                    </div>
                    <p>{userErrors.phone}</p>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter your Website Name" name="website" value={website} onChange={(e)=> onInputChange(e)}/>
                    </div>
                    <p>{userErrors.website}</p>
                    
                    <button className="btn btn-success btn-block">Add User</button>
                    <Link className="btn btn-primary mx-2" to="/">
                    Back to Home
                    </Link>
                </form>


            </div>
        </div>
    )
};

export default AddUser;