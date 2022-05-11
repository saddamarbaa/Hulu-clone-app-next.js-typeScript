import React from 'react'
import Image from 'next/image'

import { auth } from '../../config/firebase'
import { useRouter } from 'next/router'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// Inside AuthProvider
const provider = new GoogleAuthProvider()

const LogIn = () => {
  const router = useRouter()

  const signInWithGoogleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const user = result.user
        console.log({ credential, token, user })

        router.push('/')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log({ errorCode, errorMessage, email, credential })
      })
  }
  return (
    <div className="grid min-h-screen w-full place-items-center ">
      <div className="items-center rounded-lg bg-white p-[100px] pt-[50px] shadow-xl">
        <div
          className="h-[9rem] w-[9rem] "
          style={{
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Image
            className="logo-img"
            src="/images/hulus.png"
            alt="Picture of the Hulu"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h2 className="text-[1.5rem] font-bold text-black">
            Sign in to Hulu
          </h2>
        </div>

        <button
          onClick={signInWithGoogleHandler}
          className="mt-[50px] rounded-md bg-[#1DE883] px-4 py-4 text-xl font-bold text-black transition duration-300 hover:bg-green-700 "
        >
          Sign In With Google
        </button>
      </div>
    </div>
  )
}

export default LogIn
