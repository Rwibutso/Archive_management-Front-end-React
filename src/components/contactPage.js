import UserProfile from "./UserProfile"
import Contents from "./Contents";
import LowHeader from "./LowHeader";
import React, { useState } from "react";
import ContactUs from "./ContactUs";



const ContactPage= () =>{

    return(

        <>
                <body  style={{ marginRight:"20px"}}>
        <div style={{ backgroundColor:"rgba(87, 87, 87, 0.219)", width:"100%", height:"1700px" }}>
        <div>
        <div class="am-header">
      <div class="am-header-left">
        <a id="naviconLeft" href="#" class="am-navicon d-none d-lg-flex"><i class="icon ion-navicon-round"></i></a>
        <a id="naviconLeftMobile" href="#" class="am-navicon d-lg-none"><i class="icon ion-navicon-round"></i></a>
        <a href="index.html" class="am-logo">Archivema</a>
        {/* <img src={logo} height="80px" width={"130px"} /> */}

      </div>

      <div class="am-header-right">
        <UserProfile/>
      </div>
    </div>
    </div>
    <LowHeader/>
    <Contents/>
    <div class="am-mainpanel">
      <div class="am-pagebody">
      <ContactUs/><br></br><br></br><br></br>

      <div style={{ height:"100px"}}className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.60499334583!2d29.987156451168822!3d-1.9294216783339653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1644409687289!5m2!1sen!2srw" width="1385" height="560" boxShadow="7px" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                </div>

      </div>
     
      
    </div>
    <div class="am-footer" style={{ marginTop:"500px", marginLeft:"600px", dontSize:"25px"}}>
        <span>Copyright &copy;. All Rights Reserved. amanda Responsive Bootstrap 4 amanda Dashboard.</span>
      </div>
   
    </div>
    
    </body>
   
    
     
        </>
    );
};
export default ContactPage;