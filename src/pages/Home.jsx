import softwgirlimg from '../assets/prog.png' 
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='w-[80%] flex flex-col justify-center pl-[30px] md:pl-[50px] gap-[5px] md:gap-[60px]'>
        <div className='flex flex-col md:flex-row items-start md:items-center mt-[53px] md:mt-[100px] gap-[5px] md:gap-[100px]'>
        <img src={softwgirlimg} alt="img" width={400} height={200} />
        <div className='text-[40px] font-bold text-[#d74e09]'>
            <p>Hi,</p>
            <p>I'm Nazrin</p>
            <p>Front End Developer</p>
        </div>
        </div>
        <div className='text-[50px] text-[whitesmoke] font-semibold'>
        <Typewriter
          options={{
            strings: ['I code cool <span style="color:#d74e09;">websites</span>'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
    </div>
  )
}

export default Home