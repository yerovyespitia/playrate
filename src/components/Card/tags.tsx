interface PropsTags {
  tag1: string
  tag2: string
  tag3: string
}

export const Tags = ({ tag1, tag2, tag3 }: PropsTags) => {
  return (
    <ul className='flex flex-wrap gap-2 text-sm lowercase'>
      <li className='px-3 py-1 bg-blue-600 rounded-full font-semibold'>
        {tag1}
      </li>
      <li className='px-3 py-1 bg-blue-600 rounded-full font-semibold'>
        {tag2}
      </li>
      <li className='px-3 py-1 bg-blue-600 rounded-full font-semibold'>
        {tag3}
      </li>
    </ul>
  )
}
