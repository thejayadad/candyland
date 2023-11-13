'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-red-300 md:h-36 sm:h-24 px-4 py-8'>
        <div className='flex justify-between max-w-screen-2xl items-center'>
            <Link href={'/'}>LOGO</Link>
            <div>
            <Link href={'/'}>LOGO</Link>
            <Link href={'/'}>LOGO</Link>
            <Link href={'/'}>LOGO</Link>
            <Link href={'/'}>LOGO</Link>
            </div>
            <div>
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'}>Register</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar