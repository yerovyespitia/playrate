import Image from 'next/image'

export const Comments = () => {
  return (
    <article className='border rounded-lg border-tertiary hover:bg-secondary'>
      <div className='flex flex-col p-3'>
        <article className='flex flex-col gap-3'>
          <h2 className='text-lg font-semibold text-zinc-400 capitalize'>
            The last of us
          </h2>

          <p className='text-gray-200 leading-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            consequuntur delectus iste quia eligendi excepturi? Qui, doloribus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            consequuntur delectus iste quia eligendi excepturi? Qui, doloribus.
          </p>

          <footer className='flex flex-col justify-between sm:flex-row'>
            <div className='flex items-center gap-2 mb-3 sm:mb-0'>
              <Image
                className='rounded-full size-5'
                src={'/imgs/square.png'}
                width={20}
                height={20}
                alt='pfp'
              />
              <p className='font-medium text-gray-300'>Placeholder</p>
            </div>
          </footer>
        </article>
      </div>
    </article>
  )
}
