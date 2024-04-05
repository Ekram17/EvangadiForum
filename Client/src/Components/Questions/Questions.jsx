import React from 'react'
import { LiaUserCircle } from "react-icons/lia";
import { LiaAngleRightSolid} from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const  navigate = useNavigate()
    const handlesAnswer = ()=>{
        navigate("/answer")
    }
  return (
    <>
       <a  className='text-decoration-none text-black' href='#' onClick={handlesAnswer}>
                <hr/>
                <div className=" d-flex justify-content-between">
                    <div className='d-md-flex align-items-center'>
                        <div className='user d-flex flex-column align-items-center'>
                         {/* user */}  
                            <div>
                            <LiaUserCircle/>
                            </div> 
                            <div>
                                Ekram Abdu
                            </div>
                        </div>
                        <div>
                             {/* question */}
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut assumenda quo. Harum aliquam eni</p>
                        </div>
                       
                    </div>
                    <div>
                        <span>
                        <LiaAngleRightSolid />
                        </span>
                        {/* arrow */}
                    </div>
                </div>
            </a>
    </>
  )
}

export default Questions