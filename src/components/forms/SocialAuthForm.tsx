"use client";
import React from 'react'

import { signIn } from 'next-auth/react';
import ROUTES from '../../../constants/routes';
// Hooks
import { toast } from '@/hooks/use-toast'

// Components
import AuthButton from '@/components/global-components/buttons/AuthButton'

import Image from 'next/image'

// Components - shadcn/ui
import { Button } from '../ui/button'

export default function SocialAuthForm() {

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // Sign in with the selected provider
      await signIn(provider, {
        // callbackUrl: ROUTES.HOME, // @deprecated — Use redirectTo instead.
        redirectTo: ROUTES.HOME,
        redirect: false,
      })
      // await signInWithPopup(auth, new GithubAuthProvider())
    } catch (error) {
      console.error(error)

      // Show toast error notification
      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  }
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <AuthButton 
        btnSrc="/icons/github.svg"
        altBtnText="Github logo"
        labelText="Log in with Github"
        classes="invert-colors mr-2.5 object-contain"
        onClick={() => handleSignIn("github")}
      />
      {/* <AuthButton 
        btnSrc="/icons/google.svg"
        altBtnText="Google logo"
        labelText="Log in with Google"
        classes="mr-2.5 object-contain"
        onClick={() => handleSignIn("google")}
      /> */}
      <Button className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5" onClick={() => handleSignIn("google")}>
        <Image 
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Google logo"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  )
}