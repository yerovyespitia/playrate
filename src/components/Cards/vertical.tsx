import { VerticalCard } from '../Card/vertical'

interface PropsCards {
  title: string
}

export const VerticalCards = ({ title }: PropsCards) => {
  return (
    <section className='mt-6 mb-16'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-300'>{title}</h2>
        <p className='font-medium text-gray-200 text-md'>View all</p>
      </div>

      <div className='grid items-end grid-cols-2 gap-3 md:grid-cols-vertical'>
        {Array.from({ length: 4 }).map((_, index) => (
          <VerticalCard key={index} />
        ))}
      </div>
    </section>
  )
}
