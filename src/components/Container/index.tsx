interface PropsContainer {
  children: React.ReactNode
}

export const Container = ({ children }: PropsContainer) => {
  return <main className='max-w-[1520px] m-auto px-5 md:px-10'>{children}</main>
}
