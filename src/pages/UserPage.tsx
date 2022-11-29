import React, { useState } from 'react'
import UserNav from '../components/UserNav'
import Card from '../components/Card'
import IconDeposit from '../assets/cardImages/cashpayment.png'
import IconTransfer from '../assets/cardImages/moneytransf.png'
import IconCard from '../assets/cardImages/creditcard.png'
import IconLog from '../assets/cardImages/log.png'
import Eye from '../assets/images/eyeslash.png'
import Swal from 'sweetalert2'

const UserPage = () => {
  const [balanceShown, setBalanceShown ] = useState(false);
  
  const toggleBalance = () => {
    setBalanceShown(!balanceShown)
  }

  const teste = () => {Swal.fire({
    title: 'Teste?',
    input: 'number',
    inputLabel: 'testando.',
  }).then((result) =>{
    console.log(result)
  })}


  return (
    <>
      <UserNav image={'a'}/>
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-screen flex justify-between'>
          <div className='flex items-center mt-7 gap-2'>
            <h1 className='font-inter text-lg ml-4 lg:text-3xl lg:ml-7'>R$ {balanceShown ? "7.895,00" : "******"} </h1>
            <span className='hover:cursor-pointer' onClick={toggleBalance}><img src={Eye}/></span>
          </div>
          <h1 className='font-inter text-lg mt-7 mr-4 lg:text-3xl lg:mr-7'>Welcome, {'User'}.</h1>
        </div>
      <div className='w-full h-screen flex items-end'>
        <div className='w-screen h-[90vh] bg-yellow rounded-t-2xl flex flex-col gap-8 justify-center items-center'>
          <Card icon={IconDeposit} title={'Deposit'} comment={'Deposit an amount in your account and start enjoying the benefits of bankey.'}/>
          <button onClick={teste}>Deposit</button>
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