import Image from 'next/image'

export const GameDetails = () => {
  return (
    <div className='flex items-start justify-between w-full gap-3 lg:w-auto lg:gap-14'>
      <div className='flex items-center gap-2'>
        <span>😀</span>
        <p className='text-sm font-semibold text-gray-500'>50%</p>
      </div>

      <div className='flex items-center gap-2'>
        <span>💬</span>
        <p className='text-sm font-semibold text-gray-500'>2448</p>
      </div>

      <div className='flex flex-row gap-2 lg:flex-col'>
        {/* <p className='order-2 text-sm font-semibold text-gray-500 lg:order-1'>
          Platforms
        </p> */}
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
  )
}
