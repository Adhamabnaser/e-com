import React, { useState, useEffect } from 'react';
import logo from '../image/logo.png'
import desgin from '../Navbar/nav.module.css'
import toast from 'react-hot-toast'
import SvgDesgin from './../Svg/SvgDesgin';
import { useNavigate } from 'react-router-dom';


export default function Home() 
{

  const [isVisibleFirst, setIsVisibleFirst] = useState(true);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
let navigate = useNavigate()
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setIsVisibleFirst(false);
      setIsVisibleSecond(true);
    }, 500);

    return () => clearTimeout(firstTimer);
  }, []);

  const aboutUs =  (() => 
  {
    toast.success('Welcome to Khedma web site.', {
      style: {
        border: '1px solid #1acaaa',
        padding: '16px',
        color: '#1acaaa',
      },
      iconTheme: {
        primary: '#1acaaa',
        secondary: '#FFFAEE',
      },
    });
  })
  // <SvgDesgin/>

 //usless comment
 return <>
 {isVisibleFirst && (
   <div className='first mt-5' style={fullscreenStyle}>
     <img className='mt-5' src={logo} alt="FullScreenImage" style={imageStyle} />
   </div>
 )}

 {isVisibleSecond && (
  
  <div >
    <SvgDesgin/>
        <div  className={desgin.home + ''}>
            <div>
             <a href="https://www.khedmah.site/"> <button onClick={()=>{aboutUs()}} className={desgin.btn}>More About us</button></a>
            </div>  
      </div>
 </div>
 )}
</>
}


const fullscreenStyle = {
  position: 'fixed',
  top: '10%',
  left: 0,
  width: '100%',
  height: '70%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
};

