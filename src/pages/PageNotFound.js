import React from 'react'
import PNF from '../assests/download.jpg'
import { Link} from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export  function PageNotFound() {

  useTitle("Page Not Found")
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
           <img  className='rounded' src={PNF} alt="404 Error" />
        </div>

        <div className='my-4 flex justify-center'>
          <Link to="/">
            <button className=' w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 font-medium'>Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
