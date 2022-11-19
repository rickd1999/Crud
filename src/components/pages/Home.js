import React, {useState , useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import ReactPaginate from "react-paginate";
import { AiOutlineSearch , AiOutlineFolderView , AiFillEdit , AiOutlineDelete , AiOutlineUserAdd , AiOutlineMail , AiOutlineUser , AiOutlineEye} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi"
import Login from "./Login";


const Home = () => {
    const adminUser = {
        email : "admin@admin.com",
        password : "admin123"
      }
      const [luser , setLuser] = useState({name:"" , email:""});
      const [error , setError] = useState("");
    
      const Login = details =>{
        console.log(details);
    
        if (details.email == adminUser.email && details.password == adminUser.password)
        console.log("Logged in");
       setLuser ({
        name: details.name,
        email: details.email
    
       });
      } 
      const Logout = () => {
        console.log("Log out");
        setLuser({ name:"" , email:""});
      }
    const [users, setUser] = useState ([]);
    useEffect(()=>{
        loadUsers();
    },[]);

    const [searchTitle , setSearchTitle] = useState("");

    const fetchComments = async (currentPage) => {
        const res = await fetch(`http://localhost:3001/users?_page=${currentPage}&_limit=7`);
        const data = await res.json();
        return data;
    }
    const handlePageClick = async(data) =>{
    let currentPage = data.selected + 1;
    //console.log(currentPage);
    const commentsFormServer = await fetchComments(currentPage);
    console.log(commentsFormServer);
    setUser(commentsFormServer);

    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    };

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users?_page=1&_limit=7");
        setUser(result.data.reverse());
    }
    return(
        <div className="container py-3">
            <div className="ui search">
            <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={(e)=>{setSearchTitle(e.target.value);
                }}/>
                <button className="button" type="submit"><AiOutlineSearch /></button>
                <Link className="btn btn-success btn-sm add" to="/users/add"><AiOutlineUserAdd /> Add User</Link>
                <div className="App">
                    {(luser.email != "") ? (
                        <div className="button">
                            <button onClick={Logout}>Logout</button>
                        </div>
                    ) : (
                       <Link className="btn btn-success btn-sm" to="/login"> Logout </Link>
                    ) }
                </div>
                        <div className="user py-3">
                            {/* <p>{val.name}</p> */}
                            <table className="table border shadow">
  <thead className="table-secondary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name <AiOutlineUser/></th>
      <th scope="col">User Name <BiUserCircle/></th>
      <th scope="col">Email <AiOutlineMail/></th>
      <th scope="col">Action <AiOutlineEye/></th>
    </tr>
  </thead>
  <tbody>
  { users.filter((value)=>{
                    if(searchTitle===""){
                        return value;
                    } else if (
                        value.name.toLowerCase().includes(searchTitle.toLowerCase())
                    ) {
                        return value;
                      }
                }).map((val , key)=>{
                    return (
      
            <tr key={key}>
            <th >{key + 1}</th>
            <td>{val.name}</td>
            <td>{val.username}</td>
            <td>{val.email}</td>
            <td>
                <Link className="btn btn-primary btn-sm mx-2" to={`/users/User/${val.id}`}>View <AiOutlineFolderView /></Link>
                <Link className="btn btn-outline-primary btn-sm mx-2" to={`/users/edit/${val.id}`}>Edit <AiFillEdit/></Link>
                <Link className="btn btn-danger btn-sm mx-2" onClick={()=>deleteUser(val.id)}>Delete <AiOutlineDelete /></Link>
            </td>
            </tr>
              );
            })
        }
       
  </tbody>
</table>
 </div>
            </div>
           </div>
            <div className="py-2">
                
<ReactPaginate
previousLabel={'previous'}
nextLabel={'next'}
breakLabel={'...'}
pageCount={'10'}
marginPagesDisplayed={'2'}
pageRangeDisplayed={'3'}
onPageChange={handlePageClick}
containerClassName={'pagination justify-content-center'}
pageClassName={'page-item'}
pageLinkClassName={'page-link'}
previousClassName={'page-item'}
previousLinkClassName={'page-link'}
nextClassName={'page-item'}
nextLinkClassName={'page-link'}
breakClassName={'page-item'}
breakLinkClassName={'page-link'}
activeClassName={'active'}
/>
            </div>
        </div>
        
    )
}

export default Home;