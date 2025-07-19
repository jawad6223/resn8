import React from 'react'
import { Layout } from '../layout/Layout.jsx'
import { Capture } from '../components/Home/Capture/Capture.jsx'
import { Find } from '../components/Home/Find/Find.jsx'
import { Browse } from '../components/Home/Browse/Browse.jsx'
import { Talent } from '../components/Home/Talent/Talent.jsx'
import { Trending } from '../components/Home/Trending/Trending.jsx'

export const Landing = () => {
  return (
    <Layout>
      <Capture />
      <Find />
      <Browse />
      <Talent />
      <Trending />
    </Layout>
  )
}
