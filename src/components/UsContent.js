import React, { useState, useEffect } from 'react';
import Modal from "antd/lib/modal/Modal";import {Form,Input , Select,Radio,Button,Upload,Rate,Checkbox, Row,Col,} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';



const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const normFile = () => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const UsContents = () =>{
  const onFinish = () => {
    console.log('Received values of form: ', values);
  };

  const [document, setDocument]=  useState(false);

  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);

  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick]);

  const onCheckboxChange = () => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

    return(
        <>

<div class="am-sideleft">
      <ul class="nav am-sideleft-tab">
        <li class="nav-item">
          <a href="#mainMenu" class="nav-link active"><i class="icon ion-ios-home-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#emailMenu" class="nav-link"><i class="icon ion-ios-email-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#chatMenu" class="nav-link"><i class="icon ion-ios-chatboxes-outline tx-24"></i></a>
        </li>
        <li class="nav-item">
          <a href="#settingMenu" class="nav-link"><i class="icon ion-ios-gear-outline tx-24"></i></a>
        </li>
      </ul>

      <div class="tab-content">

      <div id="chatMenu" class="tab-pane">
          <ul class="nav am-sideleft-menu">
            <li class="nav-item">
              <a href="/aboutUs" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>About Us </span>
              </a>
            </li>

        <li class="nav-item">
              <a href="/contactUs" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Contact Us</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>View calendar</span>
              </a>
            </li>
            </ul>

        </div>

        <div id="mainMenu" class="tab-pane active">
          <ul class="nav am-sideleft-menu">
            <li class="nav-item">
              <a href="/" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Recent posted documents</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Invoice</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Receipt</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Letter</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Reports</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
              <i class="icon ion-ios-bookmarks-outline"></i>
                <span>Pictures</span>
              </a>
            </li>
           
          </ul>
        </div>
        <div id="emailMenu" class="tab-pane">
        <div class="pd-x-20 pd-y-10">
            {/* <Button variant="primary" title="Compose Email" /> */}
            <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <a 
                href="#"
                onClick={() => {
                  setDocument(true)}} className="btn"style={{backgroundColor:'#FB9337', width:"120%", height:"50px", alignItems:'center'}}
            >Upload a Document</a><br></br>
              </div>
              

          </div>
        </div>
        
        <div id="settingMenu" class="tab-pane">
          <div class="pd-x-15">
            <label class="tx-uppercase tx-11 mg-t-10 tx-orange mg-b-15 tx-medium">Quick Settings</label>
            <div class="bd pd-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Daily file</h6>
              <p class="tx-12">Get notified when someone apload a file.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Phones</h6>
              <p class="tx-12">Make calls to friends and family right from your account.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Notifications</h6>
              <p class="tx-12">Get all notification about Archima.</p>
              <div class="toggle toggle-light warning"></div>
            </div>

            <div class="bd pd-15 mg-t-15">
              <h6 class="tx-13 tx-normal tx-gray-800">Phone Approvals</h6>
              <p class="tx-12">Use your phone when login as an extra layer of security.</p>
              <div class="toggle toggle-light warning"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
     onClose={() => setDocument(false)}
     onOk={() => setDocument(false)}
     onCancel={() => setDocument(false)}
     visible={document}
     width="55%"
     height="55%"
     footer={null}
     //  height="200vh"
     name="normal_login"
     className="login-form"
     initialValues={{
       remember: true,}}
       >

<div  style={{alignItems:'center',justifyContent:'center', marginLeft:"40px"}}>

<a  style={{ color:"orange",  marginLeft:"25px"}}href="index.html" class="am-logo">Archivema</a><br></br><br></br>

<div style={{ fontSize:"26px", marginLeft:"120px"}}>
<h class="tx-gray-800 mg-b-25">Upload Document Form</h>
</div><br></br>

<Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >

     
<div style={{ marginLeft:"10px"}}>
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="No file Chosen"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      </div>


      <Form.Item
        {...formItemLayout}
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Tittle of the Document',
          },
        ]}
      >
        <Input  style={{ width:"200%"}} placeholder="Please input your name" />
      </Form.Item>
      <div style={{ marginLeft:"37px"}}>
      <Form.Item
        {...formItemLayout}
        name="Description"
        label="Description"
        rules={[
          {
            message: 'Please input your nickname',
          },
        ]}
      >
        <Input  style={{ width:"200%"}} placeholder="Document description" />
      </Form.Item>
      </div>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
          Private
        </Checkbox>
      </Form.Item>

      <div style={{ marginLeft:"33px"}}>
      <Form.Item name="radio-group" label="Type of file: ">
        <Radio.Group>
          <Radio value="a">Invoice</Radio><br></br>
          <Radio value="b">Receipt</Radio><br></br>
          <Radio value="c">Letters</Radio><br></br>
          <Radio value="d">Report</Radio><br></br>
          <Radio value="e">Picture</Radio><br></br>
        </Radio.Group>
      </Form.Item>
      </div>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <a className="btn"style={{backgroundColor:'#FB9337', width:"30%"}}
            href="/firstLoginIn">Submit</a>
              </div>
      </Form.Item>
    </Form>


    </div>

    </Modal>
    
    

        </>
    );
};
export default UsContents;