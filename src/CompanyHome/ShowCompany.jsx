import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import lap from '../image/istockphoto-1344447980-612x612.jpg';

export default function ShowCompany() {
  const { data, isLoading } = useQuery('Allcompanies', getAllcompanies);

  async function getAllcompanies() {
    return await axios.get('https://khdmah.online/api/company/show/4');
  }

  // Check if data is still loading
  if (isLoading) {
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

  const createdAtDate = new Date(data.data.company_general.created_at);
          const formattedDate = createdAtDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });

          const updatedAtDate = new Date(data.data.company_general.updated_at);
          const formattedUpdatedDate = updatedAtDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });




  // Check if data is available before accessing properties
//   if (!data?.data) {
//     return <div>Error: Data not available</div>;
//   }

  return (
    <div className="container pt-5 " >
        <div className="row g-4">
          <div key={0} className="col-md-1 px-5"></div>
          <div key={1} className="col-md-9 px-5">

    <div className='text-center my-5 border rounded shad'>
    <img className="w-100" style={{ width: '100%', height: '300px' }} src={lap} alt="" />
      <h1>ShowCompany</h1>
      <hr />
      <h6>first_name : <span className='text-success'> {data.data.company_general.first_name}</span></h6>
      <h6>last_name : <span className='text-success'> {data.data.company_general.last_name}</span></h6>
      <h6>phone : <span className='text-success'> {data.data.company_general.phone}</span></h6>
      <h6>id_number : <span className='text-success'> {data.data.company_general.id_number}</span></h6>
      <h6>date_of_birth : <span className='text-success'> {data.data.company_general.date_of_birth}</span></h6>
      <h6>company_phone : <span className='text-success'> {data.data.company_general.company_phone}</span></h6>
      <h6>company_phone_verified_at : <span className='text-success'> {data.data.company_general.company_phone_verified_at}</span></h6>
      <h6>url : <span className='text-success'> {data.data.company_general.url}</span></h6>
      <h6>piece_number : <span className='text-success'> {data.data.company_general.piece_number}</span></h6>
      <h6>account_number : <span className='text-success'> {data.data.company_general.account_number}</span></h6>
      <h6>building : <span className='text-success'> {data.data.company_general.building}</span></h6>
      <h6>automated_address_number : <span className='text-success'> {data.data.company_general.automated_address_number}</span></h6>
      <h6>commercial_registration_number : <span className='text-success'> {data.data.company_general.commercial_registration_number}</span></h6>
      <h6>tax_number : <span className='text-success'> {data.data.company_general.tax_number}</span></h6>
      <h6>license_number : <span className='text-success'> {data.data.company_general.license_number}</span></h6>
      <h6>identity_confirmation : <span className='text-success'> {data.data.company_general.identity_confirmation}</span></h6>
      <h6>bank_account_name : <span className='text-success'> {data.data.company_general.bank_account_name}</span></h6>
      <h6>bank_id : <span className='text-success'> {data.data.company_general.bank_id}</span></h6>
      <h6>iban : <span className='text-success'> {data.data.company_general.iban}</span></h6>
      <h6>bank_account_letter : <span className='text-success'> {data.data.company_general.bank_account_letter}</span></h6>
      <h6>supplier_code : <span className='text-success'> {data.data.company_general.supplier_code}</span></h6>
      <h6>created_at : <span className='text-success'> {formattedDate}</span></h6>
      <h6>updated_at : <span className='text-success'> {formattedUpdatedDate}</span></h6>
      <h6>company_name : <span className='text-success'> {data.data.company_general.company_name}</span></h6>
      <h6>account_number : <span className='text-success'> {data.data.company_general.account_number}</span></h6>
      <h6>account_number : <span className='text-success'> {data.data.company_general.account_number}</span></h6>
    </div>

    </div>
          </div>
          </div>
  );
}
