import axios from 'axios'
import { useFormik } from 'formik'
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

            }
            else if (data.role_type === 'company')
            {
               navigate('/home' , 500)
            }
                        
            setisloading(false)
        }
        catch(error)
        {
            toast.error('Invalid Credentials')
            console.log(error.message)
            setisloading(false)
        }
    },
    validate:async(values)=>
    {
        const errors = {};
        if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
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
  </>
}
