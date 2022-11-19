import React from "react";
import {useState,useEffect} from "react";
import { Link  } from "react-router-dom";
import axios from "axios";


const Database = () => {
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () =>{
        const res = await axios.get("http://localhost:3001/users");
        setUser(res.data.reverse());
    }
    return(
        <div className="container py-4">
            <table className="table border shadow">
  <thead className="table-secondary">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
    </tr>
  </tbody>
</table>
<Link className="btn btn-primary" to="/">
                Back to Home
            </Link>   
        </div>
    )
}

export default Database;