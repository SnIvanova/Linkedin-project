import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


export default function NotFound() {
  return (
    <>
      <div className=' d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
        <img src='../public/404.svg' alt='404_Page_Not_Found' width={'400'} />
        <h1>Error 404: Page Not Found</h1>
        <p>Sorry, we are unable to direct you to the page you requested :&#40;</p>
      </div>

{/*Componente messagistica da utilizzare globalmente. Ancora in fase di modifica*/}
      <div className='position-sticky  rounded-top-3 d-inline-flex p-1 ms-5' style={{ boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.5)' }}>
        <FaRegUserCircle style={{ marginTop: '3px', width: '20px', height: '20px' }} />
        <p className='ms-2'>Messaggistica temporanea</p>
      </div>
    </>
  )
}
