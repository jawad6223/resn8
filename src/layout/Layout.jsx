import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}
