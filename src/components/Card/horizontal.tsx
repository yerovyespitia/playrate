import Link from 'next/link'
import { GameDetails } from './details'

export const HorizontalCard = () => {
  return (
    <section className='border rounded-lg border-custom-light-black hover:bg-custom-gray'>
      <Link href={'/game'}>
        <div className='flex flex-col items-start justify-between gap-3 p-3 lg:gap-0 lg:items-center lg:flex-row'>
          <div className='flex flex-col items-center sm:flex-row'>
            <img
              className='mb-3 sm:mb-0 sm:w-[120px] sm:h-[170px] lg:h-[160px] object-cover rounded-lg'
              src={'/imgs/square.png'}
              alt='square'
            />

            <div className='flex flex-col gap-3 sm:pl-3'>
              <h2 className='text-lg font-semibold text-gray-400 capitalize'>
                The last of us
              </h2>

              <p className='max-w-[650px] lg:mr-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                consequuntur delectus iste quia eligendi excepturi? Qui,
                doloribus.
              </p>

              <ul className='flex flex-wrap gap-2 text-sm lowercase'>
                <li className='px-3 py-1 bg-blue-600 rounded-full'>
                  Adventure
                </li>
                <li className='px-3 py-1 bg-blue-600 rounded-full'>Drama</li>
                <li className='px-3 py-1 bg-blue-600 rounded-full'>Fantasy</li>
              </ul>

              <section className='inline lg:hidden'>
                <GameDetails />
              </section>
            </div>
          </div>

          <footer className='hidden lg:inline'>
            <GameDetails />
          </footer>
        </div>
      </Link>
    </section>
  )
}
