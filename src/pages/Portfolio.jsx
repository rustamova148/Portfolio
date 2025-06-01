import React from 'react'
import Card from '../components/Card'

const Portfolio = ({projects}) => {
  return (
    <div className='flex flex-col items-center gap-[50px] mt-[70px] pb-[40px]'>
        <div className='bg-[#d74e094d] w-[80%] flex jsutify-center justify-center py-[20px]'>
            <h1 className='text-[40px] text-[whitesmoke] font-bold'>Portfolio</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[20px]'>
            {projects.map(p => (
               <Card key={p.id} project={p} />
            ))}
        </div>
    </div>
  )
}

export default Portfolio