import Link from 'next/link'
import { RowCard } from '../Card/row'

interface PropsCards {
  title: string
}

export const RowCards = ({ title }: PropsCards) => {
  return (
    <section className='mt-6 mb-16'>
      <article className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-300'>{title}</h2>
        <Link
          href={'/game'}
          className='font-medium text-gray-200 text-md hover:underline'
        >
          View all
        </Link>
      </article>

      <section className='grid items-end gap-3 md:grid-cols-vertical'>
        {Array.from({ length: 4 }).map((_, index) => (
          <RowCard key={index} />
        ))}
      </section>
    </section>
  )
}
