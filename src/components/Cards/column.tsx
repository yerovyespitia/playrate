import Link from 'next/link'
import { ColumnCard } from '../Card/column'

interface PropsCards {
  title: string
}

export const ColumnCards = ({ title }: PropsCards) => {
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

      <section className='flex flex-col gap-3'>
        {Array.from({ length: 4 }).map((_, index) => (
          <ColumnCard key={index} />
        ))}
      </section>
    </section>
  )
}
