import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import desgin from './changepass.module.css'
import font from '../Navbar/nav.module.css'
import { useFormik } from 'formik'
export default function ChangePass() 
{
    let pass = {
        oldPassword : "",
        newPassword : "",
        newPassword_confirmation : ""
    }
    let formikobj = useFormik(
    {
        initialValues : pass,
        onSubmit : async(values)=>
        {
            try 
            {
                    let {data} = await axios.post("https://khdmah.online/api/changePassword",values,
                    {headers:{Authorization:localStorage.getItem('tkn')}})                        
            }
            catch (error)
            {
                console.log(error.message);
            }
        },
        validate : values =>{
            const errors = {};
            console.log(values);
        }
    })



  return<>    
            <div className={desgin.form_container}>
                <p className={ 'text-center fs-2 fw-bold pb-3 ' + font.font2 }>تغير كلمه السر</p>
                <form onSubmit={formikobj.handleSubmit}  className={desgin.form }>
                    <input onChange={ formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.oldPassword} type="password" className={desgin.input} name='oldPassword' id='oldPassword' placeholder="oldPassword"/>
                    <input onChange={ formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.newPassword} type="password" className={desgin.input } name='newPassword' id='newPassword'  placeholder="newPassword"/>
                    <input onChange={ formikobj.handleChange} onBlur={formikobj.handleBlur} value={formikobj.values.newPassword_confirmation} type="password" className={desgin.input} name='newPassword_confirmation' id='newPassword_confirmation' placeholder="newPassword_confirmation"/>
                    <div className='d-flex justify-content-center pt-3'>
                        <button className={desgin.form_btn+' w-50' }>Change Password</button>
                    </div>
                </form>
            </div>
        </>
}