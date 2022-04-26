import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {

    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='rounded-xl bg-gradient-to-br from-yellow-400 to bg-purple-600'>
                    <img className='w-44 object-cover lg:h-96 lg:w-72 p-2' src="https://links.papareact.com/8sg" alt="monkey" />
                </div>
                <div className='space-y-2 p-5 text-center'>
                    <h1 className='text-4xl font-bold text-white'>
                        PAPAFAM Apes
                    </h1>
                    <h2 className='text-xl text-gray-300'>A collection of PAPAFAM Apes who live & breath react</h2>
                </div>
            </div>
        </div>
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            <header className='flex items-center justify-between'>
                <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The <span className='font-extrabold underline decoration-pink-600/50'>PAPAFAM</span> NFT Market Place</h1>
                <button className='rounded-full bg-rose-400 px-4 py-2 font-bold text-white lg:px-5 lg:py-3 lg:text-base' onClick={() =>address ? disconnect() : connectWithMetamask()}>{address ? 'Sign out' : 'Sign in'}</button>
            </header>

            <hr className='my-2 border'/>
            {address && <p className='text-center text-sm text-rose-500'>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length -5)}</p>}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-x-0 lg:justify-center'>
                <img className='w-80 object-cover lg:h-40' src="https://links.papareact.com/bdy" alt="content" />
                <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The PAPAFAM Ape Coding Club | NFT Drop</h1>

                <p className='pt-2 text-xl text-green-500'>13 / 22 NFT's claimed</p>
            </div>
            {/* Mint button */}
            <button className='mt-10 h-16 w-full bg-red-500 text-white rounded-full ripple-bg-rose-400'>Mint NFT (0.01 ETH)</button>
        </div>
    </div>
  )
}

export default NFTDropPage