import { Card } from '../Card'

interface PropCards {
  title: string
}

export const Cards = ({ title }: PropCards) => {
  return (
    <section className='mt-6 mb-16'>
      <div className='flex justify-between items-center mb-3'>
        <h2 className='text-lg text-gray-300 font-semibold'>{title}</h2>
        <p className='text-md text-gray-200 font-medium'>View all</p>
      </div>

      <div className='grid items-end grid-cols-2 md:grid-cols-card gap-3'>
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </section>
  )
}
