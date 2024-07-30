import { Container } from '@/components/Container'
// import { Comments } from '@/components/Game/comments'
import { Details } from '@/components/Game/detailts'
import { Header } from '@/components/Game/header'

export default function Game() {
  return (
    <>
      <Container>
        <section className='flex flex-col gap-4'>
          <Header />
          <Details />
          {/* <section className='flex flex-col gap-3'>
            {Array.from({ length: 4 }).map((_, index) => (
              <Comments key={index} />
            ))}
          </section> */}
        </section>
      </Container>
    </>
  )
}
