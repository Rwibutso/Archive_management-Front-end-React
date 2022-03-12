import UserProfile from "./UserProfile"
import UsContents from "./Contents";
import LowHeader from "./LowHeader";
import React, { useState } from "react";
import AboutUs from "./AbouUs";



const AboutUsPage= () =>{

    return(

        <>
        <div >
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
    <UsContents/>
    <div class="am-mainpanel">
      <div class="am-pagebody">
      <AboutUs/>

      </div><br></br><br></br><br></br><br></br>
      <div class="am-footer">
        <span>Copyright &copy;. All Rights Reserved. amanda Responsive Bootstrap 4 amanda Dashboard.</span>
      </div>
      
    </div>
   
    
     
        </>
    );
};
export default AboutUsPage;