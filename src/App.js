import { useState } from 'react';

import Eventbind from './components/Eventbind';

import bgImage from './components/all assert/group.jpg'
import Footer from './components/Footer';

function App() {
  return(
    <div className='text-center  ' >
           
           <div className='font-bold bg-gray-500 text-4xl shadow-lg py-4 mb-12 font-mono text-white w-full rounded-b-lg' >
        <p>Like me</p>
      </div>

          <div className='flex items-center justify-center opacity-75 pb-3'>
          <img src={bgImage}/>
          </div>
         <Eventbind/>

         <Footer/>
    </div>
  )
}


export default App;
