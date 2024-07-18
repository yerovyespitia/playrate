import { Container } from '@/components/Container'
import { ColumnCards } from '@/components/Cards/column'

export default function Home() {
  return (
    <Container>
      <ColumnCards title={'Trending now'} />
      <ColumnCards title={'Lastest releases'} />
      <ColumnCards title={'Upcoming'} />
      <ColumnCards title={'All time popular'} />
      <ColumnCards title={'Most reviewed'} />
    </Container>
  )
}
