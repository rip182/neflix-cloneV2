import React from 'react'
import Header from './Header'


const Layout = ({children}) => {
  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-black"
    style={{
      "background-image":
        "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/image/Netflix-Background.jpg)",
    }}
  >
    <Header />

    {children}
  </div>
  )
}

export default Layout