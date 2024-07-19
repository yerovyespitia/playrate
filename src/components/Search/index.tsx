export const SearchBar = () => {
  return (
    <search className='mt-5'>
      <form action='submit'>
        <label htmlFor='search' className='font-semibold text-white'>
          Search
        </label>
        <input
          className='w-full px-3 mt-2 text-gray-300 rounded-md outline-none h-11 bg-secondary focus:outline-tertiary'
          placeholder='Search...'
          type='text'
          name='search'
          id='search'
        />
      </form>
    </search>
  )
}
