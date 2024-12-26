'use client'
import React from 'react'

import AuthForm from '@/components/forms/AuthForm'
import { SignInSchema } from '@/lib/validations'

export default function SignIn() {
  return (
    <AuthForm 
      formType="SIGN_IN" 
      schema={SignInSchema} 
      defaultValues={{ email: "", password: "" }} 
      // onSubmit={(data) => Promise.resolve({ sucess: true, data })}
    />
  )
}