import Image from 'next/image'

export const GameDetails = () => {
  return (
    <div className='flex items-start justify-between w-full gap-3 md:w-auto md:gap-12'>
      <div className='flex flex-col gap-1'>
        <p className='text-zinc-400 font-semibold text-[14px]'>Rating</p>
        <div className='flex items-center gap-2'>
          <span>😀</span>
          <p className='text-sm font-semibold text-gray-500'>50%</p>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-zinc-400 font-semibold text-[14px]'>Reviews</p>
        <div className='flex items-center gap-2'>
          <span>💬</span>
          <p className='text-sm font-semibold text-gray-500'>2448</p>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-zinc-400 font-semibold text-[14px]'>Platforms</p>
        <div className='flex flex-row gap-2 lg:flex-col'>
          <div className='flex gap-2'>
            <Image
              className='size-4'
              src={'/svgs/ps.svg'}
              width={16}
              height={16}
              alt='playstation'
            />
            <Image
              className='size-4'
              src={'/svgs/xbox.svg'}
              width={16}
              height={16}
              alt='xbox'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
