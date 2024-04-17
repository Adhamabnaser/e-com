import axios from 'axios';
import React from 'react';
import lap from '../image/istockphoto-1307515373-612x612.jpg';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';

export default function Recruitment() {
  const { data, isLoading, isError } = useQuery('Allcompanies', getRecruitment);

  async function getRecruitment() {
    try {
      const response = await axios.get('https://khdmah.online/api/company/recruitment');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch company data');
    }
  }

  // Check if there is an error
  if (isError) {
    return <div>Error: Failed to fetch company data</div>;
  }

  // Check if data is still loading or undefined
  if (isLoading || !data) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="loader">
          <ColorRing
            visible={true}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      </div>
    );
  }

  // Check if data is available and not empty
  if (!data.data || data.data.length === 0) {
    return <div>Error: No company data available</div>;
  }

  const { full_name, user_type, company_information } = data.data[0];
  const { city, company_type, favourite_with_company } = company_information || {};
  const { id: city_id, name_ar: city_name_ar } = city || {};
  const { name_ar, parent_company } = company_type || {};

  return <>
  <div className="container pt-5 " >
        <div className="row g-4">
          <div key={0} className="col-md-1 px-5"></div>
          <div key={1} className="col-md-9 px-5">

  <div className=' my-5 border rounded shad'>
  <img className="w-100" style={{ width: '100%', height: '300px' }} src={lap} alt="" />
    <h1 className='text-center'>get Recruitment</h1>
    <hr />
    <div className=''>
    <span className='text-success '> </span>
      <h6 className='p-2' >Full Name:  <span className='text-success' >{full_name} </span> </h6>
     <h6 className='p-2' >User Type:  <span className='text-success'  >{user_type}</span> </h6>
     <h6 className='p-2' >City ID:  <span className='text-success'  >{city_id}</span> </h6>
     <h6 className='p-2' >City Name (Arabic):  <span className='text-success'  >{city_name_ar}</span> </h6>
     <h6 className='p-2' >Company Type:  <span className='text-success'  >{name_ar}</span> </h6>
     <h6 className='p-2' >Parent Company:  <span className='text-success'  >{parent_company}</span> </h6>
     <h6 className='p-2' >Favourite With Company:  <span className='text-success'  >{favourite_with_company?.join(', ')}</span> </h6>
    </div>
  </div>

          </div>
          </div>
          </div>
  

  </>
}

