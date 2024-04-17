import React from 'react'
import font from '../Navbar/nav.module.css'
import design from './send.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function SendUs() 
{
    let messages = {
        message : ''
    }
    let formikObj = useFormik({
        initialValues: messages,
        onSubmit: async(values)=>
        {
            try {
                let {data} = await axios.post('https://khdmah.online/api/message/store',values,
                {headers:{Authorization:localStorage.getItem('tkn')}})
                console.log(data)
                if (data.message === ('success')) 
                {
                    toast.success('Sent Successfully')    
                }
            } 
            catch (error) 
            {
                console.log(error);
            }
        },
        validate: async(values) =>
        {
            const errors = {};
            console.log(values);
        }
    })
  return <>
        <form onSubmit={formikObj.handleSubmit} className='mb-5'>
            <h1 className={ " text-end text-4xl font-bold mt-8"}>الأتصــال</h1>
            <p className='text-secondary text-end '>+965</p>
            <div>
                <p className='fs-3 text-end'>واتساب <i className="text-success fa-brands fa-whatsapp"></i></p>
                <p className={' text-end'}> ارسل لنا رسالة</p>
                <textarea className='text-dark bg-light border rounded-2 pe-2' onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.message} rows="5" cols="60" name='message' id='message'>
                </textarea>
                <div className='mt-3 d-flex justify-content-center'>
                    <button type='submit' className='btn btn-outline-success w-50'>
                        تطبيق
                    </button>                   
                </div>
            </div>
        </form>
  </>
}
