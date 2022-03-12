import React from 'react';
import { Form } from 'antd';

const SignUpFirst =() =>{
    return (
        <>

        <Form>

        <div class="am-signup-wrapper">
      <div class="am-signup-box">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div>
            <h2>Archivema</h2>
              <p>We are here to serve You!!!</p>
              <p>On these website you are able to keep yourdocuments safe, and have them back at any time you wish. This facilitate to document loss and also help in advertisement when your document is pulished.</p>
              <hr/>
              <p>Already have an account? <br/> <a href="/firstLoginIn">Sign In</a></p>
              <p>Or go back<br/> <a href="/">Home</a></p>
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
        </Form>
        
        
        </>
    )
}

export default SignUpFirst;