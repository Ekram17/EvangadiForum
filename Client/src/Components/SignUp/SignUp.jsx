// import React from 'react'
// // import {useNavigate} from "react-router-dom"

// const SignUp = ({setCurrentPage}) => {
//     // const  navigate = useNavigate()
//     // const handleClick(){
//     //     navigate("/login")
//     // }
//     return (
//         <div className='col card p-5 text-center '>
//         <div>
//             <h3 className='m-3'>Join the network</h3>
//             <p className='mb-5'>
//                 Already have an account? {""}
//                 <a href='#'className='fw-semibold text-decoration-none text-warning'  onClick={()=>setCurrentPage("login")}>
//                     Sign in
//                     </a>
//             </p>
//         </div>
//         <form action=''>
//             <div className='d-flex flex-column gap-3'>
//                 <input
//                 type = "email"
//                 className='form-control p-3'
//                 placeholder='Email Address'
//                 />
//                 <div className='d-flex gap-4'>
//                 <input
//                 type = "text"
//                 className='form-control p-3'
//                 placeholder='First Name'
//                 />
//                 <input
//                 type = "text"
//                 className='form-control p-3'
//                 placeholder='LastName'
//                 /> 
//                 </div>
//                 <input
//                 type = "password"
//                 className='form-control p-3'
//                 placeholder='Password'
//                 />
//             </div>
//         <div className='p-3'>
//             <small>I agree to the privacy policy and terms of service.</small>
//         </div>
//             <div className='d-grid'>
//                 <button
//                 type='submit'
//                 className='btn btn-primary action-btn fs-5 fw-semibold'
//                 >
//                     Agree and Join
//                     </button>
//                     <div className='mt-3'>
//                 <p className='d-flex justify-content-center'>
//                     <a
//                         href=''
//                         className='fw-semibold text-decoration-none text-warning'
//                         >
//                            Already have an account?

//                             </a>
//                 </p>
//             </div>
//             </div>
//         </form>
//     </div>
//     );
// };

// export default SignUp






// import React from "react";
import { useRef } from "react";
import axios from "../../axiosConfig";
import { Link , useNavigate} from'react-router-dom';

const SignUp = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!usernameValue || !firstValue || !lastValue || !emailValue || !passValue) {
      alert("please provide all required information ");
      return;
    }

    // so let us send request to the database
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });
      alert("register successfull. please login ");


      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="col card mt-3 p-4 text-center">
      <div>
        <h4 className="m-3"> Join the network</h4>
        <p className="mb-2">
          Already have an account?
          <a
            href="#"
            onClick={() => setCurrentPage("login")}
            className="fw-semibold text-decoration-none text-warning"
          >
            Sign in
          </a>
        </p>
      </div>
      <form action=""  onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            ref={usernameDom}
            placeholder="UserName"
            className="form-control p-3"
          />

          <div className="d-flex">
            <input
              type="text"
              ref={firstnameDom}
              placeholder="FirstName"
              className="form-control"
            />

            <input
              type="text"
              ref={lastnameDom} 
              placeholder="LastName"
              className="form-control"
            />
          </div>

          <input
            type="email"
            ref={emailDom}
            placeholder="Email Address"
            className="form-control p-3"
          />

          <input
            type="password"
            ref={passwordDom}
            placeholder="Password"
            className="form-control p-3"
          />
        </div>

        <div className="mt-3">
          <p className="mb-2">
            I agree to the
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              privacy policy
            </a>
            and
            <a
              href=""
              className="fw-semibold text-decoration-none text-warning"
            >
              terms of service
            </a>
          </p>
        </div>

        <div className="d-grid mt-2">
          <button
            className="btn btn-primary fw-bold px-5 action_btn "
            type="submit"
          >
            Agree and Join
          </button>
        </div>

        <div className="">
          <a
            href="#"
            className="fw-semibold text-decoration-none text-warning  mb-2"
            onClick={() => setCurrentPage("login")}
          >
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;