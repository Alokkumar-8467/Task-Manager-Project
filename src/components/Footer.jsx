import React from 'react'

const Footer = () => {
  return (
    <footer className='h-30 bg-blue-600 mt-5' >
      <div className='flex p-5 justify-around'>
        <div className='text-center flex flex-col justify-center'>
          <h1 className='text-3xl' >Welcome to work manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='text-center'>
          <h1>Important Links</h1>
          <ul className=''>
            <li> <a href='#!'> </a>Facebook</li>
            <li> <a href='#!'> </a>Youtube</li>
            <li> <a href='#!'> </a>Intagram</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer