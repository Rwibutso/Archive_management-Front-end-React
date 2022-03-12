import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { UnorderedListOutlined } from "@ant-design/icons";



const UserProfile = () =>{

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

    return (
      <>
    <div class="dropdown dropdown-profile">
          <a href="#" class="nav-link nav-link-profile" data-toggle="dropdown">
            <img src="../img/img3.jpg" class="wd-32 rounded-circle" alt=""/>
            <span class="logged-name"><span class="hidden-xs-down"><UnorderedListOutlined style={{ width: "30%",height:"10px", fontSize: "28px"}}/></span></span>
          </a>
          <div class="dropdown-menu wd-200">
            <ul class="list-unstyled user-profile-nav">
              <li><a  href="#"
                onClick={() => setIsModalVisible(true)} ><i class="icon ion-ios-folder-outline"></i> Sign Up</a></li>
              <li><a  href="#"
                onClick={() => {
                  setVisible(true)
                  setIsModalVisible(false)
                }}><i class="icon ion-power"></i> Sign In</a></li>
            </ul>
          </div>
        </div>
        <Modal
         onClose={() => setIsModalVisible(false)}
         onOk={() => setIsModalVisible(false)}
         onCancel={() => setIsModalVisible(false)}
         visible={isModalVisible}
         width="55%"
         height="55%"
         footer={null}
         //  height="200vh"
         name="normal_login"
         className="login-form"
         initialValues={{
           remember: true,
         }}>
        <div class="am-signup-wrapper">
      <div class="am-signup-box">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div>
            <h2>Archivema</h2>
              <p>We are here to serve You!!!</p>
              <p>On these website you are able to keep yourdocuments safe, and have them back at any time you wish. This facilitate to document loss and also help in advertisement when your document is pulished.</p>
              <hr/>
              <p>Already have an account? <br/> <a href="#"  onClick={() => {
                setVisible(true)
                setIsModalVisible(false)
              }}>Sign In</a></p>
            </div>
          </div>
          <div class="col-lg-7">
            <h5 class="tx-gray-800 mg-b-25">Signin to Your Account</h5>

           

            <div class="row row-xs">
              <div class="col">
                <div class="form-group">
                  <label class="form-control-label">Firstname:</label>
                  <input type="text" name="firstname" class="form-control" placeholder="Type firstname"/>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="form-control-label">Lastname:</label>
                  <input type="text" name="lastname" class="form-control" placeholder="Type lastname"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-control-label">Email:</label>
              <input type="email" name="email" class="form-control" placeholder="Type email address"/>
            </div>

            <div class="row row-xs">
              <div class="col">
                <div class="form-group">
                  <label class="form-control-label">Password:</label>
                  <input type="password" name="password" class="form-control" placeholder="Type password"/>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="form-control-label">Confirm Password:</label>
                  <input type="password" name="conpassword" class="form-control" placeholder="Retype password"/>
                </div>
              </div>
            </div>


            <div class="form-group mg-b-20 tx-12">By clicking Sign Up button below you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a></div>

            <button type="submit" href='/signup' class="btn btn-block">Sign Up</button>
          </div>
        </div>
        <p class="tx-center tx-white-5 tx-12 mg-t-15">Copyright &copy; 2022. We starve to serve</p>
      </div>
    </div>
        </Modal>

        <Modal
          visible={visible}
          width="55%"
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          footer={null}
          //  height="200vh"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >

<div class="am-signin-wrapper">
      <div class="am-signin-box">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div>
            <h2>Archivema</h2>
              <p>We are here to serve You!!!</p>
              <p>On these website you are able to keep yourdocuments safe, and have them back at any time you wish. This facilitate to document loss and also help in advertisement when your document is pulished.</p>
              <hr/>
              <p>Don't have an account? <br/> <a  href="#"
                onClick={() => {
                  setIsModalVisible(true)
                  setVisible(false)
                }}>Sign up Now</a></p>
            </div>
          </div>
          <div class="col-lg-7">
            <h5 class="tx-gray-800 mg-b-25">Signin to Your Account</h5>

            <div class="form-group">
              <label class="form-control-label">Email:</label>
              <input type="email" name="email" class="form-control" placeholder="Enter your email address"/>
            </div>

            <div class="form-group">
              <label class="form-control-label">Password:</label>
              <input type="password" name="password" class="form-control" placeholder="Enter your password"/>
            </div>

            <div class="form-group mg-b-20"><a href="#">Reset password</a></div>

            <a type="submit" href="/dashboard" class="btn btn-block">Sign In</a>
          </div>
        </div>
        <p class="tx-center tx-white-5 tx-12 mg-t-15">Copyright &copy; 2022. We starve to Serve</p>
      </div>
    </div>

          </Modal>
    </>
    );
};
export default UserProfile;