import Link from 'next/link'
import { Card } from '../Card'

interface PropsCards {
  title: string
}

export const Cards = ({ title }: PropsCards) => {
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

      <section className='grid items-end grid-cols-2 gap-3 md:grid-cols-card'>
        {Array.from({ length: 7 }).map((_, index) => (
          <Card key={index} />
        ))}
      </section>
    </section>
  )
}
