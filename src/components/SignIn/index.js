// import React, { useState, useRef } from 'react';
// import { Redirect } from 'react-router';

// const SignIn = () => {
//     const [username, setUserName] = useState("")
//     const [password, setPassword] = useState("")
//     const [redirectHome, setRedirectHome] = useState(false)
//     const [showPass, setShowPass] = useState(false)
//     // const [hidePass, setHidePass] = useState(false)
//     const nameRef= useRef(null);
//     const pwdRef= useRef(null);

//     const navigateUser = {
//         name: "abcd",
//         pwd: "12345"
//     }

// const updateValues = (e) => {
//     // console.log(e.target.value, e.target.name)
//     e.target.name === "username" && setUserName(e.target.value)
//     e.target.name === "password" && setPassword(e.target.value)
// }
// const submitData = (e) => {
//     e.preventDefault()
//     console.log("current RefName:", nameRef.current.value)
//     console.log("current RefPassword:", pwdRef.current.value)
// console.log("sumbit", username, password);
// const {name, pwd} = navigateUser
// if(name === username && pwd === password) {
//     setRedirectHome(true)
//     window.localStorage.setItem("username", username)
//     window.localStorage.setItem("password", password)
// }
//      }
//     return (
//     <div className="d-flex justify-content-center">
//         {redirectHome && <Redirect to="/" />}
//         <form onSubmit={submitData}>
//             <label className="m-2">User Name</label>
//             <input type="text" name="username" placeholder="Enter Username"  ref={nameRef} /> <br />
//             <label className="m-2">Password</label>
//             <input type={ showPass ? "text" : "password" }  name="password"  placeholder="Enter Password" ref={pwdRef}  />
//             <button onClick={()=> setShowPass(true)}>show</button>
//             <button onClick={()=> setShowPass(false)}>hide</button>
//              <br />
//             <input className="m-auto" type="submit" />
//         </form>

//     </div> );
// }

// export default SignIn;

import { Form, Input, Button, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [redirectHome, setRedirectHome] = useState(false);


  const onFinish = (values) => {
    console.log("Success:", values);
    setRedirectHome(true)
    window.localStorage.setItem("username", values.username);
    window.localStorage.setItem("password", values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 1000);
  }, []);

  return (
    <>
    {redirectHome && <Redirect to="/" />}
      {showLoader ? (
        <div className="loader d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default SignIn;
