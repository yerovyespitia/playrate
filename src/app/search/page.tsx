import { RowCards } from '@/components/Cards/row'
import { Container } from '@/components/Container'
import { SearchBar } from '@/components/Search'

export default function Search() {
  return (
    <Container>
      <SearchBar />
      <RowCards title={'Trending now'} />
      <RowCards title={'Lastest releases'} />
      <RowCards title={'Upcoming'} />
      <RowCards title={'All time popular'} />
    </Container>
  )
}
