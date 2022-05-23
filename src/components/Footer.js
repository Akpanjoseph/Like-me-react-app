import React from 'react'

import fb from './all assert/facebook.png'
import tw from './all assert/twitter.png'
import inster from './all assert/instergram.png'

const height= 10
const width = 20

function Footer() {
  return (
    <div className='bg-gray-200 w-full mt-10 h-full p-4'>
        <p className='capitalize'>all right revered @syntaxdesigner 2022</p>

        <div className='flex items-center justify-center'>
          <img src={fb} className='px-4'/>
            <img src={tw} />
            <img src={inster} className='px-4'/>
            
        </div>
    </div>
  )
}

export default Footer