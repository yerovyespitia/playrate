import { Container } from '@/components/Container'
import { Cards } from '../components/Cards'

export default function Home() {
  return (
    <Container>
      <Cards title={'Trending now'} />
      <Cards title={'Lastest releases'} />
      <Cards title={'Upcoming'} />
      <Cards title={'All time popular'} />
      <Cards title={'Most reviewed'} />
    </Container>
  )
}
