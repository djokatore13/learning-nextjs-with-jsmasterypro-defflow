import React from 'react'

// Components
import AuthButton from '@/components/global-components/buttons/AuthButton'

export default function SocialAuthForm() {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <AuthButton 
        btnSrc="/icons/github.svg"
        altBtnText="Github logo"
        labelText="Log in with Github"
        classes="invert-colors mr-2.5 object-contain"
      />
      <AuthButton 
        btnSrc="/icons/google.svg"
        altBtnText="Google logo"
        labelText="Log in with Google"
        classes="mr-2.5 object-contain"
      />
    </div>
  )
}