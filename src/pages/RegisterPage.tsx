import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Notiflix from 'notiflix'

const RegisterPage = () => {
  
  const navigate = useNavigate();
  
  const [register, setRegister] = useState({
    'username': '',
    'cpf': '',
    'email': '',
    'wage': '',
    'password': '',
  })

  const onInputChange = (evt: any) => {
    evt.preventDefault()
    setRegister({...register, [evt.target.name]: evt.target.value })
  }

  const registerUser = (event: any) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/api/register', register, {headers:{"Content-Type" : "application/json"}})
    .then((res) => {
      console.log(res.data)
      Notiflix.Notify.success('Usuário cadastrado com sucesso!')
      navigate('/login')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='w-full h-screen bg-yellow flex items-center justify-center flex-col gap-4'>
      <Link to="/" className='font-quicksand font-bold text-6xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)] hover:transition-all hover:translate-y-1 hover:duration-300 hover:ease-in'>bankey</Link>
        <div className='w-[85vw] h-[60vh] lg:w-[20vw] lg:h-[80vh] bg-white rounded-md shadow-md flex flex-col items-center justify-center'>
            <form onSubmit={registerUser} className='h-[80vh] w-[85vw] flex flex-col items-center justify-center gap-4 '>
            <h1 className='font-inter text-3xl text-yellow font-bold [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)]'>SIGN UP</h1>
                <input type="text" placeholder='Name' name="username" onChange={onInputChange} className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="text" placeholder='CPF' name='cpf' onChange={onInputChange} className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="email" placeholder='Email' name='email' onChange={onInputChange} className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="text" placeholder='Wage' name='wage' onChange={onInputChange} className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="password" placeholder='Password' name='password' onChange={onInputChange}  className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <button className='py-2 px-[10.3vh] lg:px-[11vh] font-inter border-2 border-yellow bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Register</button>
            </form>
            <Link to="/login" className='font-inter text-sm mb-2 hover:text-yellow'>Already have key? Click here!</Link>
        </div>
    </div>
  )
}

export default RegisterPage