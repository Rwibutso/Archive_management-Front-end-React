import React from 'react';
import { Form } from 'antd';

const LoginFirst =() =>{
    return (
        <>

        <Form>

        <div class="am-signin-wrapper">
      <div class="am-signin-box">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div>
            <h2>Archivema</h2>
              <p>We are here to serve You!!!</p>
              <p>On these website you are able to keep yourdocuments safe, and have them back at any time you wish. This facilitate to document loss and also help in advertisement when your document is pulished.</p>
              <hr/>
              <p>Don't have an account? <br/> <a  href="/signUp">Sign up Now</a></p>
              <p>Or go back to <br/> <a  href="/">Home</a></p>
            
            </div>
          </div>
          <div class="col-lg-7">
            <h5 class="tx-gray-800 mg-b-25">Login First</h5>

            <div class="form-group">
              <label class="form-control-label">Email:</label>
              <input type="email" name="email" class="form-control" placeholder="Enter your email address"/>
            </div>

            <div class="form-group">
              <label class="form-control-label">Password:</label>
              <input type="password" name="password" class="form-control" placeholder="Enter your password"/>
            </div>

            <div class="form-group mg-b-20"><a href="#">Reset password</a></div>

            <a type="submit" href="#" class="btn btn-block">Login</a>
          </div>
        </div>
        <p class="tx-center tx-white-5 tx-12 mg-t-15">Copyright &copy; 2022. We starve to Serve</p>
      </div>
    </div>
        </Form>
        
        
        </>
    )
}

export default LoginFirst;