import { Cards } from '@/components/Cards'
import { Container } from '@/components/Container'
import { SearchBar } from '@/components/Search'

export default function Search() {
  return (
    <Container>
      <SearchBar />
      <Cards title={'Trending now'} />
      <Cards title={'Lastest releases'} />
      <Cards title={'Upcoming'} />
      <Cards title={'All time popular'} />
      <Cards title={'Most reviewed'} />
    </Container>
  )
}
