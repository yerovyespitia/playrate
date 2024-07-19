interface PropsTags {
  tags: string[]
}

export const Tags = ({ tags }: PropsTags) => {
  return (
    <ul className='flex flex-wrap gap-2 text-sm lowercase'>
      {tags?.map((tag) => (
        <li
          className='px-3 py-1 font-semibold text-white bg-blue-600 rounded-full'
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
