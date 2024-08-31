import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginFormControls, registerFormControls } from '@/config';
import CommonForm from './../../components/common/Form';

const initState = {
  username: '',
  password: ''
}


function LoginPage() {

  const [formData, setFormData] = useState(initState)

  const onSubmit = () => {
    
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Login</h1>
        <p className='mt-2'>
          Don't have an account
          <Link to={'/auth/register'} className='font-medium text-primary hover:underline'> Register</Link>
        </p>
        <CommonForm 
          formControls={loginFormControls}
          btnText={'Sign Up'}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default LoginPage