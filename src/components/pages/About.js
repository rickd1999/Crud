import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return(
        <div className="container">
            <div className="py-4">
                
                


                <div class="card text-center">
  <div class="card-header">
    CRUD
  </div>
  <div class="card-body">
  <img className="mx-1" src="logo192.png" alt=""
   width="50" height="50"/>
    <h5 class="card-title">USER DATABASE</h5>
    <p class="card-text">The founder is an integral part of the brand’s origin story, so making her the star of the page works. Think about including additional elements that can strengthen your About Us page. Much like Bossy Cosmetics, this can be additions like:

Brand-related Instagram posts
A welcome YouTube video
Links to partner charities and brands
Pictures of your customers using your product
Interactive timelines that show company milestones
When you craft your About page, you don’t have to forgo creativity for the sake of being “professional,” especially if that isn’t a value your brand stands for. What matters is that your brand is relatable to its target audience and meets them where they’re at.

The founder is an integral part of the brand’s origin story, so making her the star of the page works. Think about including additional elements that can strengthen your About Us page. Much like Bossy Cosmetics, this can be additions like:

Brand-related Instagram posts
A welcome YouTube video
Links to partner charities and brands
Pictures of your customers using your product
Interactive timelines that show company milestones
When you craft your About page, you don’t have to forgo creativity for the sake of being “professional,” especially if that isn’t a value your brand stands for. What matters is that your brand is relatable to its target audience and meets them where they’re at.</p>
    <Link className="btn btn-primary mx-2" to="/">
                    Back to Home
                    </Link>
                    <Link className="btn btn-primary mx-2" to="/contact">
                    Go to Contact
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

export default About;