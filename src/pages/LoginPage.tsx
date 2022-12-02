import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import hideIcon from '../assets/images/eyeslash.png'
import Notiflix, { Notify } from 'notiflix'
import { IMaskInput } from 'react-imask'

const LoginPage = () => {
  
  const navigate = useNavigate();

  useEffect(() =>{
    var token = localStorage.getItem('token')
    if (token){
      navigate('/myprofile')
    }
  })


  const [user, setUser] = useState({
    'cpf' : '',
    'password': ''
  })

  const onInputChange = (evt: any) => {
    setUser({...user, [evt.target.name]: evt.target.value})
  }

  const login = (event: any) => {
    event.preventDefault()
    axios.post('https://api-luciano.azurewebsites.net/api/login', user, {headers:{"Content-Type" : "application/json"}})
    .then((res) => {
      localStorage.setItem('token', `${res.data['token']}`)
      if (localStorage.getItem('token') != null){
        navigate('/myprofile')
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure("Usuario ou senha incorretos...", {timeout: 1300, position:'center-top'})
    })
  }

  return (
    <div className='w-full h-screen bg-yellow flex items-center justify-center flex-col gap-4'>
        <Link to="/" className='font-quicksand font-bold text-6xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)] hover:transition-all hover:translate-y-1 hover:duration-300 hover:ease-in'>bankey</Link>
        <div className='w-[85vw] h-[40vh] lg:w-[20vw] lg:h-[50vh] md:w-[40vw] sm:w-[50vw] bg-white rounded-md shadow-md flex flex-col items-center justify-center'>
        <form onSubmit={login} className='h-[80vh] w-[85vw] flex flex-col items-center justify-center gap-6 '>
                <h1 className='font-inter text-3xl text-yellow font-bold [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)]'>SIGN IN</h1>
                <input name='cpf' placeholder='CPF' className="py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none" onChange={onInputChange}/>
                <input type="password" placeholder='Password' name='password' onChange={onInputChange} className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                
                <button className='py-2 px-[12vh] lg:px-[11vh] font-inter border-2 border-white bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Login</button>
        </form>
            <Link to="/register" className='font-inter text-sm mb-10 hover:text-yellow'>Don't have a key? Click here!</Link>
        </div>
    </div>
  )
}

export default LoginPage