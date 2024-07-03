'use client'
import { useEffect, useState } from 'react'

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    function handleWindowChange(e: MediaQueryListEvent) {
      if (e.matches) {
        setShowMenu(false)
      }
    }

    mediaQuery.addEventListener('change', handleWindowChange)

    return () => {
      mediaQuery.removeEventListener('change', handleWindowChange)
    }
  }, [])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflowY = 'unset'
      document.body.style.height = 'auto'
    }
  }, [showMenu])

  return (
    <>
      <nav className='relative flex justify-between md:justify-center items-center w-full h-20 py-0 px-5 border-b border-b-custom-gray gap-10 md:gap-0'>
        <p className='text-3xl cursor-pointer md:hidden'>🐙</p>
        <ul className='md:flex items-center gap-5 hidden'>
          <li className='text-3xl cursor-pointer'>🐙</li>
          <li className='font-medium hover:underline cursor-pointer'>Search</li>
          <li className='font-medium hover:underline cursor-pointer'>
            Community
          </li>
          <li className='font-medium hover:underline cursor-pointer'>Login</li>
        </ul>

        <section
          className='md:hidden flex flex-col gap-1 cursor-pointer'
          onClick={() => setShowMenu(true)}
        >
          <div className='w-[23px] h-[3px] rounded-md bg-custom-light-black' />
          <div className='w-[23px] h-[3px] rounded-md bg-custom-light-black' />
          <div className='w-[23px] h-[3px] rounded-md bg-custom-light-black' />
        </section>
      </nav>

      <ul
        className={
          showMenu
            ? 'md:hidden absolute top-0 right-0 flex w-full bg-custom-gray h-screen flex-col items-start p-[20px] gap-[30px] border-l border-l-custom-gray z-[100]'
            : 'hidden'
        }
      >
        <div
          className='flex justify-end items-end w-full mt-2'
          onClick={() => setShowMenu(false)}
        >
          <div className="size-[32px] cursor-pointer before:absolute before:right-[30px] before:content-[''] before:w-[2.5px] before:h-[25px] before:bg-custom-light-black after:absolute after:right-[30px] after:content-[''] after:w-[2.5px] after:h-[25px] after:bg-custom-light-black before:rotate-45 after:-rotate-45" />
        </div>

        <li className='text-3xl w-full cursor-pointer'>🐙</li>
        <li className='font-medium w-full text-center bg-custom-black p-3 h-12 rounded-lg  hover:underline cursor-pointer'>
          Search
        </li>
        <li className='font-medium  w-full text-center bg-custom-black p-3 h-12 rounded-lg hover:underline cursor-pointer'>
          Community
        </li>
        <li className='font-medium w-full text-center bg-custom-black p-3 h-12 rounded-lg  hover:underline cursor-pointer'>
          Login
        </li>
      </ul>
    </>
  )
}
