import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import tittle from '../image/_د_____ê_é_ê-ai.png'
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { authContext } from '../Context/authentication';
import toast from 'react-hot-toast';
import SvgDesgin from '../Svg/SvgDesgin';
export default function Login() 
{
  const x =  (() => 
  {
    toast('Good Job!', {
      icon: '👏',
    });
  })
  const {setToken} = useContext(authContext)
    let user = 
  {
    email :"",
    password :""
  }
  const [errMsg ,seterrMsg] =useState(null);
  const [successMsg ,setsuccessMsg] =useState(null);
  const [isloading , setisloading] = useState(false)
  const navigate =  useNavigate()

  const formikobj =  useFormik({
    initialValues: user,
    onSubmit: async(values) => 
    {
     try 
     {
        console.log(values)
        setisloading(true)
        //Api Calling is here
        const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
        if (data.message === 'success') 
      {
        setsuccessMsg('Sign up Successfully')
        setToken(data.token)
        setTimeout(() => {navigate('/product')}, 500); 
      }
      localStorage.setItem('tkn',data.token)
     } catch (error) {
        console.log(error.response.data.message);
        seterrMsg(error.response.data.message)
        setisloading(false)
     }
    },
    validate : function (values) 
    { 
      const errors = {};
      if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
      if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
      console.log(errors)
      seterrMsg(null)
      return errors
    }
  })

  return<>
            <form className='my-0' onSubmit={formikobj.handleSubmit}>
{/* <SvgDesgin/> */}
                    {/* {errMsg? <div className="alert alert-danger text-center">{errMsg}</div>: ''}
                    {successMsg? <div className="alert alert-success text-center">{successMsg}</div>: ''}
                    {successMsg? toast.success(successMsg): ''}

                            <h2 className='mt-5 text-success text'>Login Now : </h2>

        
                            <label htmlFor="Email" className=' pb-1'> Email :</label>
                            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
                            {formikobj.errors.email && formikobj.touched.email?<div class="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''}

                            <label htmlFor="password" className=' pb-1'> Password :</label>
                            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
                            {formikobj.errors.password && formikobj.touched.password?<div class="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''}

                        
                           
                            <div className='d-flex justify-content-end'><button onClick={()=>{x()}} type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success'  >
                                
                                {isloading?<ThreeDots 
                                    height="25" 
                                    width="50" 
                                    radius="4"
                                    color="#4fa94d" 
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}/> :"Login"}
                                  </button>  
                                </div> */}


    <div className="login-page " style={{  marginTop: '-50px' }}>
      <div className="left-half"></div>
      <div className="right-half">
        <div className="login-container">
            <div className='theFirst p-4'>
            <img className="w-50 bg-dark" src={tittle} alt='Fresh Cart Logo'/>
            </div>
            <div className='theSecond'>
          <h1 className='text-center'>Log in</h1>
          <p>Need help?</p>

          <form>
            <label htmlFor="email">Email</label>
            <input type="email" className='custom-input form-control' id="email" placeholder="ex: joe@email.com" />
            <label htmlFor="password">Password</label>
            <input type="password" className='custom-input form-control' id="password" placeholder="Enter your Password" />
            <a href="#">Forgot password?</a>

            <button type="submit">Login</button>
          </form>

            </div>
        </div>
      </div>
    </div>


              </form>


</>
}
  


// import React from 'react';
// import './About.css';
// import tittle from '../../images/_د_____ê_é_ê-ai.png'

// const LoginPage = () => {
  //  return (
  //   <div className="login-page">
  //     <div className="left-half"></div>
  //     <div className="right-half">
  //       <div className="login-container">
  //           <div className='theFirst p-4'>
  //           <img className="w-50 bg-dark" src={tittle} alt='Fresh Cart Logo'/>
  //           </div>
  //           <div className='theSecond'>
  //         <h1 className='text-center'>Log in</h1>
  //         <p>Need help?</p>

  //         <form>
  //           <label htmlFor="email">Email</label>
  //           <input type="email" className='custom-input form-control' id="email" placeholder="ex: joe@email.com" />
  //           <label htmlFor="password">Password</label>
  //           <input type="password" className='custom-input form-control' id="password" placeholder="Enter your Password" />
  //           <a href="#">Forgot password?</a>

  //           <button type="submit">Login</button>
  //         </form>

  //           </div>
  //       </div>
  //     </div>
  //   </div>
  // );
// };

// export default LoginPage;
