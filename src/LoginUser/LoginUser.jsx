import axios from 'axios'
import { useFormik } from 'formik'
<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { InfinitySpin } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import desgin from './login.module.css'
import logo from '../image/color.png'
import font from '../Navbar/nav.module.css'
import { authContext } from '../Context/authentication'
export default function LoginUser() 
{
    const [isloading , setisloading] = useState(false)
    const {setToken} = useContext(authContext)
    const {role ,setrole} = useContext(authContext)
    const [errMsg ,seterrMsg] =useState(null);
=======
import tittle from '../image/_د_____ê_é_ê-ai.png'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import './LoginUser.css';
import { ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import SvgDesgin from '../Svg/SvgDesgin'


export default function LoginUser() 
{
    const [isloading , setisloading] = useState(false)
    const [token , setToken] = useState(null)
    // const [errMsg ,seterrMsg] =useState(null);
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
    // const [successMsg ,setsuccessMsg] =useState(null);
    const navigate = useNavigate()
    localStorage.setItem('fcsToken','fFP7MlAmSzqX4gNXkJxOc7:APA91bFHcJnneQA_vjafpJrKnzIN_PYKV0iTw-ohjEerTY4nh8tryg9aSjOpOyRmRnDlHySMxNgA2_2hJP4QXsRiVuyul_WkyR5nEQQCdy_dJL87ooSapmpHhsXTGBPf5wmHwWy3_2Aa')
    
    let user = {
    email : "",
    password : ""
  }
  const formikobj = useFormik({
    initialValues : user,
    onSubmit:async(values)=>
    {
        try
        {   
            setisloading(true)
            const {data} = await axios.post('https://khdmah.online/api/login',values,{ headers:
            {fcsToken:localStorage.getItem('fcsToken')}
            })
<<<<<<< HEAD
            console.log(data.role_type)
            setrole(data.role_type)
            localStorage.setItem('role',data.role_type)
           
            if (data?.role_type === 'user') 
            {   
                toast.success('Login Successfully')
                console.log(data);
                localStorage.setItem('tkn','Bearer '+ data.access_token)
                setToken(data.access_token)
                navigate('/userhome' , 1000)
=======
            console.log(data)
           
            if (data?.role_type === 'user') 
            {   
                toast.success('Welcome Back')
                localStorage.setItem('tkn', data.access_token)
                setToken(localStorage.setItem('tkn', data.access_token))

                if (data.message === 'El 7aga el fe message') 
                {
                  navigate('/ConfirmEmail' , 1000)
                }
                navigate('/Company' , 1000)
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98

            }
            else if (data.role_type === 'company')
            {
<<<<<<< HEAD
              console.log(data);
                localStorage.setItem('tkn','Bearer '+ data.access_token)
                setToken(data.access_token)
                navigate('/companyhome' , 500)
=======
               navigate('/home' , 500)
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
            }
                        
            setisloading(false)
        }
        catch(error)
        {
<<<<<<< HEAD
            toast.error('Invalid Email or Password')
            console.log(error.response)
=======
            toast.error('Invalid Credentials')
            console.log(error.message)
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
            setisloading(false)
        }
    },
    validate:async(values)=>
    {
        const errors = {};
        if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
<<<<<<< HEAD
        if (values.password.length < 6 || values.password.length > 12) {errors.password = 'Name Should be from 4 to 10'}
        console.log(values)
        return errors
    }
  })  
  console.log(role);
  return <>
  <div className='d-flex justify-content-center align-items-center'>
    
      <form className={desgin.form_container} onSubmit={formikobj.handleSubmit}>
        <div className={desgin.logo_container}>
          <img className={desgin.logo_container +' p-2'} src={logo} />
        </div>
        <div className={desgin.title_container}>
          <p className={desgin.title+" "+ font.font2}>تسجيل الدخول الي حسابك </p>
          <span className={desgin.subtitle}>ابدا في حسابك معنا و استمتع بمزيد من الخبره و المتعه مع التطبيق</span>
        </div>
        <div className={desgin.input_container}>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
            <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
          </svg>
          <label className={desgin.input_label} htmlFor="email_field">Email</label>
        
          <input required onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.email}  placeholder="name@mail.com" title="Inpit title" name="email" type="text" className={desgin.input_field} id="email_field"/>
        </div>
        <div className={desgin.input_container}>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
            <path strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
            <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
          </svg>
          <label className={desgin.input_label} htmlFor="password_field">Password</label>
          <input required='Must Enter Password' onChange={formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.password} placeholder="Password" title="Inpit title" name="password" type="password" className={desgin.input_field} id="password_field"/>
        
        </div>
          <Link to={'/forgetPass'}>
           <p className={desgin.page_link}>
             <span className={desgin.page_link_label}>Forgot Password?</span>
           </p>
          </Link>

        <button title="Sign In" type="submit" className={desgin.sign_in_btn}>
            <span className={font.font2 + ' fw-bold text-white'}>
            {isloading?(<InfinitySpin 
                  visible={true}
                  height="200"
                  width="200"
                  color="#ffff"
                  ariaLabel="infinity-spin-loading"
                  />) :"تسجيل الدخول"}
              </span>
        </button>

        <p className={desgin.sign_up_label}>
        Don't have an account?
        <Link to="/reqChoose">
          <span className={desgin.sign_up_link}>Sign up</span>
        </Link>
      </p>
        <div className={desgin.separator}>
          <hr className={desgin.line}/>
               <span>welcome</span>
          <hr className={desgin.line}/>
        </div>
        
        {/* <button title="Sign In" type="submit" className={desgin.sign_in_ggl}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
        </button> */}
        <p className={desgin.note}>Terms of use & Conditions</p>
    </form>
  </div>

=======
        // if (values.password.length >0 ) {errors.password = 'Enter valid pass'}
        console.log(errors)
        // seterrMsg(null)
        return errors
    }
  })  
  return<>

  <form className='my-0' onSubmit={formikobj.handleSubmit}>

{/* {errMsg? <div className="alert alert-danger text-center">{errMsg}</div>: ''} */}
{/* {successMsg? <div className="alert alert-success text-center">{successMsg}</div>: ''} */}


<div className="login-page " style={{  marginTop: '-50px' }}>
      <div className="left-half"></div>
      <div className="right-half">
        <div className="login-container">
            <div className='theFirst p-4'>
            <img className="w-50 bg-dark" src={tittle} alt='Fresh Cart Logo'/>
            </div>
            <div className='theSecond'>
          <h1 className='text-center'>Login user Now </h1>
          <p>Need help?</p>

          <div >
            <label className=' pb-1'> Email :</label>
            <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
            {/* {formikobj.errors.email && formikobj.touched.email?<div class="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''} */}
            {console.log(formikobj.values)}
            <label htmlFor="password" className=' pb-1'> Password :</label>
            <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
            {/* {formikobj.errors.password && formikobj.touched.password?<div class="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''} */}
        
        
        {/* <Link className='' to={"/Company"}> */}
           <h4 className='pt-3 '>Forget Password ?</h4>
           {/* </Link> */}

           <div className='d-flex justify-content-end'><button type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success'  >
            
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
            </div>
          </div>

            </div>
        </div>
      </div>
    </div>


{/* 
        <h2 className='mt-5 text-success text'>Login user Now : </h2>


        <label htmlFor="Email" className=' pb-1'> Email :</label>
        <input onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Ex : user@gmail.com'className='form-control mb-3' />
        {formikobj.errors.email && formikobj.touched.email?<div class="alert alert-success" role="alert">{formikobj.errors.email}!</div> :''}

        <label htmlFor="password" className=' pb-1'> Password :</label>
        <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.password} type="password" id="password" name="password" placeholder=' Password' className='form-control mb-3'/>
        {formikobj.errors.password && formikobj.touched.password?<div class="alert alert-success" role="alert">{formikobj.errors.password}!</div> :''}
        
        <Link className='' to={"/home"}> <h4 className='pt-3 '>Forget Password ?</h4></Link>

    
       
        <div className='d-flex justify-content-end'><button type= 'submit' disabled={ formikobj.isValid === false || formikobj.dirty === false} className='btn btn-outline-success'  >
            
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
</form>
>>>>>>> e7290d2dbfc74fdcb9ec9324599fc69cd6fb5e98
  </>
}
