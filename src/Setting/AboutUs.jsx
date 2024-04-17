import React from 'react'
import font from '../Navbar/nav.module.css'
import photo from '../image/Sss.png'
import design from './ِabout.module.css'

export default function AboutUs() {
  return<>
        <div className='pt-4'>
            <h2 className={font.font3 + ' text-center' }>المزيد عنا </h2>
            <div className={''}> 
                <img className={design.img + ' rounded-4'} src={photo} alt='Khedma'/>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                    <a className={'text-dark btn btn-outline-light pb-2' + design.butt} href="https://www.khedmah.site/terms-of-use">
                        هيا
                    </a>
            </div>
        </div>
    </>
}
