import React from 'react'

const Card = ({project}) => {
  return (
    <div>
      <a href={
        project.id === 1
      ? "https://task-management-theta-nine.vercel.app/"
      : project.id === 2
      ? "https://course-website-1nyl.vercel.app/"
      : project.id === 3
      ? "https://password-generator-three-green.vercel.app/"
      : project.id === 4
      ? "https://redux-toolkit-list.vercel.app/" 
      : project.id === 5
      ? "https://ecommerce-redux-tailwindcss.vercel.app/"
      : project.id === 6
      ? "https://todo-app-three-jade.vercel.app/"
      : "#"
      } target="_blank">
      <img src={project.img} alt="project" width={350} height={300} className='mb-[30px]'/>
      </a>
      <p className='text-[#175e55] text-[20px] font-semibold'>{project.name}</p>
    </div>
  )
}

export default Card