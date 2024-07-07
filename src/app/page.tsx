import { Container } from '@/components/Container'
import { HorizontalCards } from '@/components/Cards/horizontal'

export default function Home() {
  return (
    <Container>
      <HorizontalCards title={'Trending now'} />
      <HorizontalCards title={'Lastest releases'} />
      <HorizontalCards title={'Upcoming'} />
      <HorizontalCards title={'All time popular'} />
      <HorizontalCards title={'Most reviewed'} />
    </Container>
  )
}
