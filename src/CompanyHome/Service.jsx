import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import lap from '../image/macbook-pro-background-vp5h2ohju1u02115.jpg';

export default function Service() {
  const { data, isLoading, isError } = useQuery('Allcompanies', getAllcompanies);

  async function getAllcompanies() {
    try {
      const response = await axios.get('https://khdmah.online/api/company/service');
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

  // Check if data.data is not an array or empty
  if (!Array.isArray(data.data) || data.data.length === 0) {
    return <div>No company data available</div>;
  }

  return (
    <div className='text-center'>
      <h1 className='text-success'>Service</h1>
      <div className="container pt-5 " >
        <div className="row g-3">

        
        {data.data.map(company => (
            <div key={0} className="col-md-4   ">
               <div className="border border-3 rounded shad ">
            
            <img className="w-100" style={{ width: '100%', height: '300px' }} src={lap} alt="" />
            <p>Full Name : <span className='text-success'  > {company.full_name}</span></p>
            <p>City ID: <span className='text-success'  >{company.company_information.city_id}</span></p>
            <p>City Name (Arabic):<span className='text-success'  >  {company.company_information.city.name_ar}</span></p>
            <p>Parent Company: <span className='text-success'  >{company.company_information.company_type.parent_company}</span></p>

            </div>
        </div>
          
        ))}
      </div>
              </div>
              </div>
  
  );
}



