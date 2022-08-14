import React from 'react'
import { useContext } from 'react'
import TicketonContext from './context/ticketon-context'
import { Icon } from '@iconify/react';
import ProtectedRouteSignIn from './ProtectedRouteSignIn';
export default function SignIn() {
    const { signInWithGoogle, currUser } = useContext(TicketonContext)
    console.log(currUser)


  

    

    return (
        <ProtectedRouteSignIn>
            <div className='w-[90%] p-5 mx-auto'>
                <div className='w-full md:w-[50%] mx-auto bg-slate-200 rounded-lg shadow-2xl text-center pt-10'>
                    <h1 className='text-lg font-bold text-blue-300'>Please Sign In with google to continue</h1>

                    <div className='mx-auto w-full px-4 h-[200px] my-auto flex justify-center items-center'>
                        <button onClick={signInWithGoogle} className="flex p-2 w-[250px] bg-transparent border-2 border-blue-900 my-auto justify-center items-center"  ><Icon icon="flat-color-icons:google" className='text-[40px]' />
                        <h1 className='p-2 text-sm font-bold text-black'>Sign In With Google</h1></button></div>
                </div>
            </div>
        </ProtectedRouteSignIn>
    )
}
