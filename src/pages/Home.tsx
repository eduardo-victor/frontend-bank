import React from 'react'
import Comment from '../components/Comment.jsx'
import firstImage from '../assets/commentImages/firstComment.png'
import secondImage from '../assets/commentImages/secondComment.png'
import thirdImage from '../assets/commentImages/thirdComment.png'
import  creditCard from '../assets/images/creditCard.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'


 //h-screen w-full bg-cover bg-[url('./assets/images/backgroundMobile.png')] md:w-full md:bg-[url('./assets/images/background.png')] z-auto flex flex-col justify-end items-center
const Home = () => {
  return (
    <>
    <Navbar />
    <div className='w-full h-screen'>
      <div className="w-full h-screen bg-cover bg-[url('./assets/images/backgroundMobile.png')] md:bg-[url('./assets/images/background.png')] lg:bg-[url('./assets/images/backgroundWeb.png')]  z-auto flex items-end justify-center">
        <div className='w-[95vw] flex flex-col mb-20 md:ml-14 lg:w-[50vw] lg:ml-0 '>
          <h1 className='text-[10vw] md:text-[7vw] lg:text-[4vw]  font-extrabold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] font-inter'>We are the <span className='text-yellow'>key</span> to your financial success!</h1>
          <Link to="/register" className='text-[2.5vh] md:text-[3vh] font-inter font-medium text-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] hover:text-white hover:cursor-pointer hover:transition-all hover:translate-x-1'>I want be part</Link>
        </div>
      </div>
      <div className='w-full h-[60vh] md:h-[65vh] lg:h-[90vh] bg-yellow flex flex-col items-center'>
        <div className='mt-20 flex flex-col gap-14 lg:gap-24'>
          <Comment image={firstImage} comment={"“Bankey has one of the best supports I've ever seen! It's easy and fast to use.”"} />
          <Comment image={secondImage} comment={'“Bankey has a unique investment platform, it is easy and intuitive.”'} />
          <Comment image={thirdImage} comment={'“This bank is amazing, it has no annual fees and even has a cashback system!”'}/>
        </div>
      </div>
      <div className='w-full h-[85vh] md:h-[60vh] lg:h-[60vw] bg-white flex flex-col md:flex-row items-center lg:justify-center'>
        <div className='w-[95vw] mt-16 flex flex-col items-center justify-center md:items-start md:ml-6 lg:w-[80vw] lg:ml-20'>
          <h1 className='text-[9vw] md:text-[5vw] font-semibold text-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>Know our credit cards</h1>
          <div className='w-[90vw] h-full md:w-[50vw] lg:w-[40vw]'>
            <h1 className='text-[20px] font-medium [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] md:text-[30px] lg:text-[40px] lg:mb-6'>When purchasing one of our credit cards, you are entitled to several benefits that open doors to your future.</h1>
          </div>
        </div>
        <div className='mt-14 w-[75vw] md:mt-0 md:w-[55vw] md:ml-8 md:mr-6 lg:ml-2'>
          <img src={creditCard} alt="" />
        </div>
        <div className='flex md:hidden'>
          <button className='py-3 px-32 mt-10 font-semibold font-inter border-2 border-yellow md:px-6 bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white [text-shadow:_0_0.5px_0_rgb(0_0_0_/_20%)]'>More about</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home