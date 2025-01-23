import React from "react"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth"

import { app } from "../../FirebaseConfig"

export default function Login() {
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)
  const handleLogin = (e) => {
    setloading(true)
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setloading(false)
        setuser(user.accessToken)

        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }
  let GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        console.log(credential)
        const token = credential.accessToken
        setuser(token)
        // The signed-in user info.
        const user = result.user

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }
  return (
    <>
      <form className="px-[12px]" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border-[1px] border-[solid] border-[black] h-[45px] w-[100%] placeholder:px-[12px] mb-[10px]"
        />
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border-[1px] border-[solid] border-[black] h-[45px] w-[100%] placeholder:px-[12px] mb-[10px]"
          />
          <span className="absolute font-[600] right-2 top-2">show</span>
        </div>
        <button className="font-[700] relative mb-[10px]">
          Forgot Password?
          <span className="border-[1px] border-[solid] border-[black] absolute w-[100%] left-0 top-[100%]"></span>
        </button>
        <button className="font-[700] w-[100%] bg-black text-white py-[10px] mt-[5px]">
          Log In
        </button>
      </form>
    </>
  )
}
