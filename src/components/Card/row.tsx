import Link from 'next/link'
import { GameDetails } from './details'
import { Tags } from './tags'

export const RowCard = () => {
  return (
    <article className='border rounded-lg border-tertiary hover:bg-secondary'>
      <Link href={'/game'}>
        <div className='flex flex-col items-start justify-between gap-3 p-3 lg:gap-0 lg:items-center lg:flex-row'>
          <div className='flex flex-col sm:items-center sm:flex-row'>
            <img
              className='mb-3 sm:mb-0 sm:w-[120px] sm:h-[170px] lg:h-[160px] object-cover rounded-lg'
              src={'/imgs/square.png'}
              alt='square'
            />

            <article className='flex flex-col gap-3 sm:pl-3'>
              <h2 className='text-lg font-semibold text-gray-400 capitalize'>
                The last of us
              </h2>

              <Tags tags={['Adventure', 'Drama', 'Fantasy']} />
              <GameDetails />
            </article>
          </div>
        </div>
      </Link>
    </article>
  )
}
