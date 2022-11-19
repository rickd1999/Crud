import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
    return(
        <div className="container">
            <div className="py-4">
            <div class="card text-center">
  <div class="card-header">
  Contact Page
  </div>
  <div class="card-body">
  <img className="mx-1" src="logo192.png" alt=""
   width="90" height="90"/>
    <h5 class="card-title">Contact Us</h5>
    <p class="card-text">Call or Whatsapp: 111 - 444 - 000</p>
    <Link className="btn btn-primary mx-2" to="/">
                    Back to Home
                    </Link>
                    <Link className="btn btn-primary mx-2" to="/about">
                    Go to About
                    </Link>
  </div>
  <div class="card-footer text-muted">
    Developed by Rick Dey 
  </div>

</div>
</div>


</div>
        
    )
}

export default Contact;