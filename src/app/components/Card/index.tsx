export const Card = () => {
  return (
    <section className='flex flex-col gap-2'>
      <img
        className='w-full h-full object-cover rounded-lg'
        src='/imgs/square.png'
        alt='image'
      />
      <p className='font-medium text-md text-gray-200 capitalize'>Duck game</p>
    </section>
  )
}
