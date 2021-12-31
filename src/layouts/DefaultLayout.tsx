import React from 'react'

const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <header>123</header>
      <main>{children}</main>
      <footer>321</footer>
    </>
  )
}

export default DefaultLayout
