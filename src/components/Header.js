import UserProfile from "./UserProfile"
import Contents from "./Contents";
import LowHeader from "./LowHeader";
import React, { useState } from "react";
import Tables from "./Tables";



const Header= () =>{

  
    return(

        <>
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

      <Tables/>
      <p class="tx-center tx-white-5 tx-12 mg-t-15">Copyright &copy; 2022. We starve to serve</p>

      </div>
      
    </div>
   
    
     
        </>
    );
};
export default Header;