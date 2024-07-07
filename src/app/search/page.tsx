import { Cards } from '@/components/Cards'
import { VerticalCards } from '@/components/Cards/vertical'
import { Container } from '@/components/Container'
import { SearchBar } from '@/components/Search'

export default function Search() {
  return (
    <Container>
      <SearchBar />
      <VerticalCards title={'Trending now'} />
      <VerticalCards title={'Lastest releases'} />
      <VerticalCards title={'Upcoming'} />
      <VerticalCards title={'All time popular'} />
      {/* <Cards title={'Trending now'} />
      <Cards title={'Lastest releases'} />
      <Cards title={'Upcoming'} />
      <Cards title={'All time popular'} />
      <Cards title={'Most reviewed'} /> */}
    </Container>
  )
}
