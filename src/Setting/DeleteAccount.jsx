import React from 'react'
import design from './ِabout.module.css'
import font from '../Navbar/nav.module.css'
import axios from 'axios';

export default function DeleteAccount() 
{
  const handleDelete = async () => {
    try 
    {
        const response = await axios.delete(`https://khdmah.online/api/user/delete`,
        {headers:{Authorization:localStorage.getItem('tkn')}})
    }
     catch (error) 
    {
        console.error('Error deleting resource:', error);
    }
};
  return<>
    <div className='pb-5'>
        <h3 className={font.font3 + ' text-center'}>هل انت متاكد من تطبيق هذا الخيار</h3>
        <div className=' d-flex justify-content-center mt-3'>
          <button type='button' onClick={handleDelete} className='btn btn-outline-danger w-75'>
              Delete this Account
          </button>
        </div>
    </div>
  </>
}
