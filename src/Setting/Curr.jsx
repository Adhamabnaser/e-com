import React from 'react'
import design from './curr.module.css'
import font from '../Navbar/nav.module.css'

export default function Curr() {
  return <>
  <div className='pb-5'>
    <h2 className={font.font3 +' fs-2 text-center mt-3 pb-5'}>العملة</h2>
    <div className={design}>
      <select className='form-select mt-5' name="curr" id="curr">
        <option value="">..</option>
        <option value="">دولار</option>
        <option value="">ريال</option>
        <option value="">جنيه</option>
        <option value="">؋</option>
      </select>
    </div>
  </div>
  
  </>
}
