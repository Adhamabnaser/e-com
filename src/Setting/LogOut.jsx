import React, { useContext, useState } from 'react'
import design from './ِabout.module.css'
import font from '../Navbar/nav.module.css'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery'
import { authContext } from '../Context/authentication'

export default function LogOut() 
{
    const out = useNavigate()
    const {token , setToken } = useContext(authContext)
   
    $('#logg').click(function () 
    {
        console.log('log out');
        localStorage.removeItem('tkn')
        setToken(null)
        out('/loguser')
    })

    // const logout = () => 
    //     {
    //         console.log('log out');
    //         // localStorage.removeItem('tkn')
    //         // setToken(null)
    //         // out('/loguser')
    //     }
    return<>
    <div className='pb-5'>
        <h3 className={font.font3 + ' text-center'}>هل انت متاكد من تسجيل الخروج</h3>
        <div className=' d-flex justify-content-center mt-3'>
          <button id='logg' className='btn btn-outline-danger w-75'>
                <i className="fa-solid fa-right-from-bracket pe-1"></i>  log Out
          </button>
        </div>
    </div>
  </>
}

