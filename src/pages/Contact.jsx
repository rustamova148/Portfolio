import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center gap-[50px] mt-[70px] pb-[40px]'>
      <div className='bg-[#d74e094d] w-[80%] flex jsutify-center justify-center py-[20px]'>
            <h1 className='text-[40px] text-[whitesmoke] font-bold'>Contacts Info</h1>
      </div>
      <div className='text-[20px] text-[#30190e]'>
        <p><span className='font-bold'>Email:</span> <a href="mailto:nezrinrustamova454@gmail.com" target="_blank" rel="noopener noreferrer">nezrinrustamova454@gmail.com</a></p>
        <p><span className='font-bold'>Linkedin hesabım: </span> <a href="https://www.linkedin.com/in/nazrin-rustamova-7475511a7/" target="_blank" rel="noopener noreferrer">Nazrin Rustamova</a></p>
      </div>
    </div>
  )
}

export default Contact