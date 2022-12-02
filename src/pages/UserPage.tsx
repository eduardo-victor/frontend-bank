import React, { useEffect, useState } from 'react'
import UserNav from '../components/UserNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import Card from '../components/Card'
import imageUm from '../assets/cardImages/cashpayment.png'
import imageDois from '../assets/cardImages/log.png'
import imageTres from '../assets/cardImages/creditcard.png'
import imageQuatro from '../assets/cardImages/moneytransf.png'

const UserPage = () => {
  
  const navigate = useNavigate()

  const [userApi, setUserApi] = useState({
    'agency': '',
    'cpf': '',
    'email': '',
    'username': '',
    'id': '',
    'wage': '',
    'balance': '',
    'number': '',
  })

  useEffect(() => {
    var getToken = localStorage.getItem('token')
    if (getToken != null){
    axios.get(`https://api-luciano.azurewebsites.net/api/user`, {headers: {
      'Authorization': `Bearer ${getToken}`
    }})
    .then((res) => {
      setUserApi(res.data.user)
    })}
    else{
      navigate('/login')
    }
  }, [])
  
  const [balanceShown, setBalanceShown ] = useState(false);
  const [eyeSlash, setEyeSlash] = useState(false)

  
  const toggleBalance = () => {
    setBalanceShown(!balanceShown)
    setEyeSlash(!eyeSlash)
  }

  return (
    <>
      <UserNav image={'a'}/>
      <div className='w-full h-screen bg-white flex flex-col items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center mt-6 gap-6'>
          <div className='px-[7vh] py-[6vw] md:py-[2vw] md:px-[10vh] bg-yellow rounded-md drop-shadow-md flex flex-col justify-center gap-3 items-center'>
            <h1 className='font-inter text-2xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>Welcome, {userApi.username}!</h1>
            <div className='w-full flex justify-center gap-2'>
              <h1 className='font-inter text-2xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>R$ {balanceShown ? userApi.balance : "********"}</h1>
              <span className='hover:cursor-pointer' onClick={toggleBalance}>{eyeSlash ? <FaEyeSlash className='w-4 h-8 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'/>  : <FaEye className='w-4 h-8 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'/> }</span>
            </div>
              <h1 className='font-inter text-xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>Agency: {userApi.agency}</h1>
              <h1 className='font-inter text-xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>Account: {userApi.number}</h1>
            </div>
            <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-5 bg-yellow rounded-t-2xl'>
              <Card title='Deposit' icon={imageUm}></Card>
              <Card title='Extract' icon={imageDois}></Card>
              <Card title='New Card' icon={imageTres}></Card>
              <Card title='Transfer' icon={imageQuatro}></Card>
            </div>
        </div>
      </div>

    </>
    )
}

export default UserPage