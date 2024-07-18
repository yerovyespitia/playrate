import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <article className='flex flex-col gap-2'>
      <Link href={'/game'}>
        <Image
          className='object-cover w-full h-full rounded-lg'
          src={'/imgs/square.png'}
          width={195}
          height={195}
          alt='square'
        />
      </Link>
      <Link href={'/game'}>
        <p className='font-medium text-gray-200 capitalize text-md hover:text-gray-400'>
          Duck game
        </p>
      </Link>
    </article>
  )
}
