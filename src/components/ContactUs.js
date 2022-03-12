import React from "react";
import {  MailFilled, PhoneFilled, HomeFilled } from '@ant-design/icons';
import undraw from "./images/undraw1.png"

const ContactUs =() =>{
    return(
        <>
        
      
      <div style={{ backgroundColor:"white", width:"100%", marginRight:"50px"}}>
         
      <div class="am-signin-box" style={{ textAlign:"center", marginTop:"40px" , padding:"50px", marginRight:"60px"}}>

          <div class="col-lg-5" style={{display:'flex',alignItems:'center', marginLeft:"200px", paddingRight:"20px"}}>
          <div style={{backgroundColor:'#FB9337', height:"155px", textAlign:"center", paddingLeft:"50px"}} className="icon2">
                            <h style={{ fontSize: "35px", marginRight:"60px" }}><HomeFilled /></h><br></br>
                            <p2 style={{ marginRight:"65px"}}> Location</p2><br></br>
                            <p3 style={{ marginRight:"60px"}}>KG 99 ST</p3>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div style={{backgroundColor:'#FB9337', width:"255px", height:"155px", alignItems:'center', paddingRight:"30px",}}className="icon2">
                            <h style={{ fontSize: "35px", color:"rgb(22, 138, 158);" , marginLeft:"55px" }}><PhoneFilled /></h><br></br>
                            <p2 style={{ marginLeft:"30px"}}> Phone Number</p2><br></br>
                            <p3  style={{ marginLeft:"30px"}}>+250789083600</p3>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div style={{backgroundColor:'#FB9337', width:"185px", height:"155px", alignItems:'center', paddingRight:"7px",}}className="icon2">
                            <h style={{ fontSize: "35px" ,marginLeft:"15px"}}><MailFilled /></h><br></br>
                            <p2 style={{ marginLeft:"22px"}}> Email</p2><br></br>
                            <p3 style={{ textDecoration: "underline",marginLeft:"23px"}}>archima@gmail.com</p3>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <br></br>
          <br></br>
          <div style={{ display:"flex", marginTop:"160px"}}>
          <div>
          <img src={undraw} height="500px" width={"500px"} style={{ marginRight:"50px"}} />
          </div>
          <div class="col-lg-7" style={{ marginRight:"10px"}}>
            <h5 class="tx-gray-800 mg-b-25" style={{ fontSize:"27px"}}>Contact Us</h5>

            <div class="form-group">
              <h class="form-control-label">Email:</h>
              <input type="email" name="email" class="form-control" placeholder="Enter your email address" style={{ width:"150%"}}/>
            </div>

            <div class="form-group">
              <label class="form-control-label">Telephone Number:</label>
              <input class="form-control" placeholder="Enter your phone number" style={{ width:"150%"}}/>
            </div>

            <div class="form-group">
              <label class="form-control-label">Message:</label>
              <input class="form-control" style={{ height:"200px", width:"150%"}}/>
            </div><br></br><br></br>

            <div  style={{display:'flex',alignItems:'center',justifyContent:'center', width:"150%"}}>
              <a className="btn"style={{backgroundColor:'#FB9337', width:"150%", height:"50px", alignItems:'center'}}
            >Send</a><br></br><br></br>
              </div>
          </div><br></br><br></br>
          </div>
         
        
      </div>
      </div>
        </>
    )
}
export default ContactUs;