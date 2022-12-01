import React, { useEffect, useState } from 'react'
import UserNav from '../components/UserNav'
import Card from '../components/Card'
import IconDeposit from '../assets/cardImages/cashpayment.png'
import IconTransfer from '../assets/cardImages/moneytransf.png'
import IconCard from '../assets/cardImages/creditcard.png'
import IconLog from '../assets/cardImages/log.png'
import Eye from '../assets/images/hide.png'
import EyeShown from '../assets/images/show.png'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Notiflix, { Notify } from 'notiflix'

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
    axios.get(`http://127.0.0.1:8000/api/user`, {headers: {
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
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-screen h-[20vh] flex items-center justify-between ml-10'>
          <div className='flex items-center mt-7'>
            <h1 className='font-inter text-lg ml-4 lg:text-3xl lg:ml-7 w-[13vw]'>R$ {balanceShown ? userApi.balance : "********"} </h1>
            <span className='hover:cursor-pointer' onClick={toggleBalance}>{eyeSlash ? <img className='w-7' src={Eye} /> : <img className='w-7' src={EyeShown}/>}</span>
          </div>
          <div className='w-[30vw] h-[8vh] flex flex-col justify-center items-center bg-white drop-shadow-md'>
            <h1 className='font-inter text-md'>Agency: {userApi.agency}</h1> 
            <h1 className='font-inter text-md'>Account: {userApi.number}</h1> 
          </div>
          <h1 className='font-inter text-lg mt-7 mr-4 lg:text-3xl lg:mr-7'>Welcome, {userApi.username}.</h1>
          <div>
          </div>
        </div>
      <div className='w-full h-screen flex items-end'>
        <div className='w-screen h-[90vh] bg-yellow rounded-t-2xl flex flex-col gap-8 justify-center items-center'>
          <Card icon={IconDeposit} title={'Deposit'} comment={'Deposit an amount in your account and start enjoying the benefits of bankey.'}/>
          <Card icon={IconTransfer} title={'Transfer'} comment={'Transfer any amount to another account in up to three clicks.'}/>
          <Card icon={IconLog} title={'Statement'} comment={'Check past transactions by clicking here.'}/>
          <Card icon={IconCard} title={'Card'} comment={'Know the credit requirements and apply for your card here.'}/>
        </div>
      </div>
      </div>

    </>
    )
}

export default UserPage