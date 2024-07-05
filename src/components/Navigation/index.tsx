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
      <nav className='relative flex justify-between md:justify-center items-center w-full h-20 py-0 px-5 border-b border-b-custom-gray gap-10 md:gap-0'>
        <Items
          classUl={'flex items-center gap-5'}
          classLi={
            'font-medium hover:underline cursor-pointer hidden md:inline'
          }
        >
          <Link href={'/'}>
            <li className='text-3xl cursor-pointer'>🐙</li>
          </Link>
        </Items>

        <section className='md:hidden flex flex-col gap-1 cursor-pointer'>
          <button onClick={() => setShowMenu(true)}>
            <Image
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
            ? 'md:hidden absolute top-0 right-0 flex w-full bg-custom-gray h-screen flex-col items-start p-[20px] gap-[30px] border-l border-l-custom-gray z-[100]'
            : 'hidden'
        }
        classLi={
          'font-medium w-full text-center bg-custom-black hover:bg-custom-light-black transition p-3 h-12 rounded-lg cursor-pointer'
        }
      >
        <div className='flex justify-between items-center w-full py-[1.5px]'>
          <Link href={'/'}>
            <p className='text-3xl cursor-pointer md:hidden'>🐙</p>
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
