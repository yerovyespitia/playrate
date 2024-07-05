'use client'
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <section className='flex flex-col gap-2'>
      <Link href={'/game'}>
        <Image
          className='w-full h-full object-cover rounded-lg'
          src={'/imgs/square.png'}
          width={195}
          height={195}
          alt='square'
        />
      </Link>
      <Link href={'/game'}>
        <p className='font-medium text-md text-gray-200 capitalize hover:text-gray-400'>
          Duck game
        </p>
      </Link>
    </section>
  )
}
