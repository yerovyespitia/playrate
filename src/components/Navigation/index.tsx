'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Items } from './items'
import { useShowMenu } from '@/utils/useShowMenu'
import { useMediaQuery } from '@/utils/useMediaQuery'
import Link from 'next/link'

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  useMediaQuery(setShowMenu)
  useShowMenu(showMenu)

  return (
    <>
      <nav className='relative flex justify-between md:justify-between items-center w-full 2xl:w-[95%] transition 2xl:m-auto 2xl:px-0 h-20 py-0 px-5 md:px-10 border-b border-b-secondary'>
        <Items
          classUl={'flex items-center gap-5'}
          classLi={
            'font-medium cursor-pointer hidden md:inline text-white'
          }
          limit={3}
        >
          <Link href={'/'}>
            <li className='text-3xl cursor-pointer'>🐙</li>
          </Link>
        </Items>

        <section className='flex flex-row cursor-pointer'>
          <Link href={'/login'}>
            <button className='hidden md:inline cursor-pointer rounded-full bg-secondary border border-secondary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary'>
              Login
            </button>
          </Link>
          <Link href={'/register'}>
            <button className='hidden md:inline cursor-pointer ml-3 rounded-full bg-secondary border border-secondary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary'>
              Register
            </button>
          </Link>
          <button onClick={() => setShowMenu(true)}>
            <Image
              className='md:hidden'
              src={'./svgs/stripes.svg'}
              width={27}
              height={27}
              alt='stripes'
            />
          </button>
        </section>
      </nav>

      <Items
        classUl={
          showMenu
            ? 'md:hidden absolute top-0 right-0 flex w-full bg-secondary h-screen flex-col items-start p-5 gap-5 border-l border-l-secondary z-[100]'
            : 'hidden'
        }
        classLi={
          'font-medium w-full text-center bg-primary hover:bg-tertiary transition text-white p-3 h-12 rounded-lg cursor-pointer'
        }
        setShowMenu={setShowMenu}
      >
        <div className='flex justify-between items-center w-full py-[1.5px]'>
          <Link href={'/'}>
            <p
              onClick={() => setShowMenu(false)}
              className='text-3xl cursor-pointer md:hidden'
            >
              🐙
            </p>
          </Link>
          <button onClick={() => setShowMenu(false)}>
            <Image
              className='cursor-pointer'
              src={'./svgs/close.svg'}
              width={27}
              height={27}
              alt='close'
            />
          </button>
        </div>
      </Items>
    </>
  )
}
