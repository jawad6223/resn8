import React from 'react'
import { Sidebar } from '../Navbar/Sidebar'
import { Foot } from '../Footer/Foot'

export const Layoutone = (props) => {
  return (
    <div className={props.class}>
      <Sidebar />
      {props.children}
      <Foot />
    </div>
  )
}
