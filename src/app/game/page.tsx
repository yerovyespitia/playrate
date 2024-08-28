import { Container } from '@/components/Container'
// import { Comments } from '@/components/Game/comments'
import { Details } from '@/components/Game/details'
import { Header } from '@/components/Game/header'
import { Tabs } from '@/components/Game/tabs'

export default function Game() {
  return (
    <>
      <Container>
        <section className='flex flex-col gap-4'>
          <Header />
          <Tabs />
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
