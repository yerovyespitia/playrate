import Link from 'next/link'
import { PostCard } from '../Card/post'

interface PropsCards {
  title: string
}

export const PostCards = ({ title }: PropsCards) => {
  return (
    <section className='mt-6 mb-16'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-lg font-semibold text-gray-300'>{title}</h2>
        <Link
          href={'/game'}
          className='font-medium text-gray-200 text-md hover:underline'
        >
          View all
        </Link>
      </div>

      <section className='flex flex-col gap-3'>
        {Array.from({ length: 4 }).map((_, index) => (
          <PostCard key={index} />
        ))}
      </section>
    </section>
  )
}
