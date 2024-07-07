export const SearchBar = () => {
  return (
    <search className='mt-5'>
      <form action='submit'>
        <label htmlFor='search' className='font-semibold'>
          Search
        </label>
        <input
          className='rounded-md mt-2 px-3 h-11 w-full text-gray-300 bg-custom-gray outline-none focus:outline-custom-light-black'
          placeholder='Search...'
          type='text'
          name='search'
          id='search'
        />
      </form>
    </search>
  )
}
