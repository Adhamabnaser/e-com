import React from 'react'
import desgin from '../Navbar/nav.module.css'


export default function Home() 
{
 // de --=> دي يعتبر صفحه الهوم 

 //usless comment
 return<>
 
  <div className={desgin.home + ' fixed-top'}>
      <div>
        <button className={desgin.btn}>More About us</button>
      </div>  
    </div>
         </>
}
