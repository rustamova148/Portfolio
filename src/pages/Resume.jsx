import React from 'react'

const Resume = () => {
  return (
    <div className='pl-[30px] pt-[50px]'>
      <p className='mb-[10px] text-[#30190e] text-[18px]'>You can link to my CV file via this button.</p>
      <a href="https://drive.google.com/file/d/1JNcQTOl9XLPZXwWmeAfp3EuxqsOmPkfJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className='p-[10px] bg-[#d74e09] border-none rounded-[8px] cursor-pointer font-semibold text-[#30190e]'>
      Resume
      </button>
      </a>
    </div>
  )
}

export default Resume