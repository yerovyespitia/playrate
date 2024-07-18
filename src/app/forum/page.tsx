import { PostCards } from '@/components/Cards/post'
import { Container } from '@/components/Container'

export default function Forum() {
  return (
    <Container>
      <PostCards title={'Recently posted'} />
      <PostCards title={'Recent activity'} />
      <PostCards title={'Top trending posts'} />
      <PostCards title={'Most like posts'} />
      <PostCards title={'Bug reports'} />
    </Container>
  )
}
