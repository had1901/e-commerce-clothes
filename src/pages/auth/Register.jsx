import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerFormControls } from '@/config';
import CommonForm from './../../components/common/Form';

const initState = {
  email: '',
  username: '',
  password: ''
}


function RegisterPage() {

  const [formData, setFormData] = useState(initState)

  const onSubmit = () => {

  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new user</h1>
        <p className='mt-2'>
          Already have an account
          <Link to={'/auth/login'} className='font-medium text-primary hover:underline'> Login</Link>
        </p>
        <CommonForm 
          formControls={registerFormControls}
          btnText={'Sign In'}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default RegisterPage