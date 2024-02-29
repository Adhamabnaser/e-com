import React from 'react'
import desgin from './reqChoose.module.css'
import { Link } from 'react-router-dom'
import pic from '../image/خدمه.png'
import SvgDesgin from '../Svg/SvgDesgin'
export default function ReqChoose() 
{
  return<>
 <div className=' d-flex justify-content-center align-items-center mt-5 container'>
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className= {desgin.bg_choosePhote+' '+'p-5 border border-3 rounded text-white fs-1 fw-bold bg-white'}>
            <div className='text-center'>
                <SvgDesgin/>
                <div className="wrapper">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                            Sign Up to be 
                        </text>
                    </svg>
                </div>    
                <div>
                    <img className={desgin.wightImg + ' mb-5'} src = {pic} />
                </div>        
                <div >
                    <div className='ms-auto d-flex gap-5'>
                        <div className='ms-2'>
                            <Link to='/reg'><button className=' btn btn-outline-success px-5'> User</button></Link> 
                        </div>
                        <div>
                            <Link to='/regCom'><button className=' btn btn-outline-dark px-4'>Company</button></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>

  </>
}
