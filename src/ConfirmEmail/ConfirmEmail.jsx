import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
// import design  from '../ForgetPass/pass.module.css'
import design from './confirm.module.css'
export default function ConfirmEmail() 
{
    const [isloading , setisloading] = useState(false)
    const navigate = useNavigate()
    let user = 
    {
        email : "",
        verification_code : ""
    }
    const formikobj = useFormik({
      initialValues : user,
      onSubmit:async(values)=>
      {
          try
          {   
              setisloading(true)
              const {data} = await axios.post('https://khdmah.online/api/confirm-code-email',values)
              console.log(data)
              
              console.log('adham');
            //   if (data?.email === '')  // fe hena kman condition
            //   {   
            //       console.log('adham');
            //       setTimeout(() => {navigate('/loguser')}, 1000);
            //   }
              setisloading(false)
          }
          catch(error)
          {     
              toast.error('Error Occured : please try again with valid information')
              console.log(error.response.data)
              setisloading(false)
          }
      },
      validate:async(values)=>
      {
          const errors = {};
        //   if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
        //   if (values.verification_code.match(/[0-9]$/)) { errors.verification_code = 'Verification Code is Invalid'}
          console.log(values)
          return errors
      }
    })  
  
    return <>
    <div className='d-flex justify-content-center align-items-center w-100 pt-5 '>
        <div className={design.form_container +' w-100'}>
            <div className={design.logo_container+ ' d-flex justify-content-center align-items-center'}>
             <span className=' fs-4 text-center'>Email Confirmation</span> 
            </div>
  
            <form onSubmit={formikobj.handleSubmit} className={design.form}>
              <div className={design.form_group}>
                <label className='ps-1 py-1' htmlFor="email">Email</label>
                <input onChange={formikobj.handleChange} value={formikobj.values.email} onBlur={formikobj.handleBlur} type="text" id="email" name="email" placeholder="Enter your email" required/>
              </div>
              <div className={design.form_group}>
                <label className='ps-1 pt-2' htmlFor="verification_code">Code</label>
                <input onChange={formikobj.handleChange} value={formikobj.values.verification_code} onBlur={formikobj.handleBlur} type="text" id="verification_code" name="verification_code" placeholder="Enter Your Code" required/>
              </div>
              
                <div className='d-flex justify-content-center mt-1'>
                    
              <button className={design.form_submit_btn} type="submit">
              {isloading?
              <div className={design.loader}>
                  <span >
                  <InfinitySpin
                    visible={true}
                    width="200"
                    color="#ffff"
                    ariaLabel="infinity-spin-loading"/>
                  </span>
              </div>
                   :"Confirm"}
              </button>
                </div>
            </form>
  
          </div>
    </div>
    </>
//     console.log('adham');
//     const [isloading , setisloading] = useState(false)
//     const navigate = useNavigate()
    
//     let user = 
//     {
//         email : "",
//         verification_code : ""
//     }
//   const formikobj = useFormik({
//     initialValues : user,
//     onSubmit:async(values)=>
//     {
//         try
//         {   
//             setisloading(true)
//             const {data} = await axios.post('https://khdmah.online/api/confirm-code-email',values)// fe hena headers
//             console.log(data)
           
//             if (data?.email === 'Ay 7aga') 
//             {   
//                 toast.success("E-mail Confirmed Successfully")
//                 navigate('/loguser' , 1000) 
//                 // console.log(data.role_type);
//             }            
//             setisloading(false)
//         }
//         catch(error)
//         {
//             toast.error('Invalid code or email')
//             console.log(error.message)
//             setisloading(false)
//         }
//     },
//     validate:async(values)=>
//     {
//         const errors = {};
//         if (values.email.includes('@')===false ||values.email.includes('.') === false) { errors.email = 'E-mail is Invalid'}
//         if (values.verification_code.length ===6) {errors.verification_code = 'verification_code must be 6 digit'}
//         console.log(errors)
//         // seterrMsg(null)
//         return errors
//     }
//   })  
//   return<>
//   <form className='container w-50' onSubmit={formikobj.handleSubmit}>

//         <h2 className='mt-5 text-success text-center'>Confirmation of  Email : </h2>

//         <div className='form-control my-4'>
//             <div className='my-4'>
//                <div>
//                     <label htmlFor="Email" className=' pb-1'> Email :</label>
//                     <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.email} type="text" id="Email" name="email" placeholder='Your Email'className='form-control mb-3' />
//                </div> 
//                 <div>
//                     <label htmlFor="ConfirmEmail" className=' pb-1'> Code :</label>
//                     <input required onChange={formikobj.handleChange} onBlur={formikobj.onBlur} value={formikobj.values.verification_code} type="text" id="verification_code" name="verification_code" placeholder=' Code' className='form-control mb-3'/>
//                 </div>
//             </div>          
//         </div>

//         <div className='d-flex justify-content-end'><button type= 'submit' className='btn btn-outline-success px-5'  >
            
//             {isloading?<ThreeDots 
//                 height="25" 
//                 width="50" 
//                 radius="4"
//                 color="#4fa94d" 
//                 ariaLabel="three-dots-loading"
//                 wrapperStyle={{}}
//                 wrapperClassName=""
//                 visible={true}/> :"ConfirmEmail"}
//               </button>  
//             </div>
// </form>
//   </>
}
