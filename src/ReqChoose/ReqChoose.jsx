import React from 'react'
import desgin from './reqChoose.module.css'
import { Link } from 'react-router-dom'
export default function ReqChoose() 
{
  return<>
 <div className={desgin.hight_of_reqChoose+' d-flex justify-content-center align-items-center mt-5 container'}>
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className= {desgin.bg_choosePhote+' '+'p-5 border border-3 rounded text-white fs-1 fw-bold'}>
            <div className='text-center'>
                <h1 className='text-dark'>Sign Up Like</h1>
            <div >
        <div className='ms-auto d-flex gap-5 mt-5 pt-5'>
            <Link to='/reg'><button className=' btn btn-light '>Req user</button> </Link>   
            <Link to='/regCom'><button className=' btn btn-info '>Req company</button> </Link> 
            </div>
        </div>
            </div>
        </div>
    </div>
 </div>
  </>
}
