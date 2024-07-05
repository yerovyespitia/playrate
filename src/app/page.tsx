import { Cards } from '../components/Cards'

export default function Home() {
  return (
    <main className='max-w-[1520px] m-auto px-5 md:px-10'>
      <Cards title={'Trending now'} />
      <Cards title={'Lastest releases'} />
      <Cards title={'Upcoming'} />
      <Cards title={'All time popular'} />
      <Cards title={'Most reviewed'} />
    </main>
  )
}
