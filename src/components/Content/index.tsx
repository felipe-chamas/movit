import React from 'react'
import Head from 'next/head'
import { Container } from './styles'
import Profile from './Profile'
import CompletedChallenges from './CompletedChallenges'
import Countdown from './Countdown'

const Content: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Início | mov.it</title>
      </Head>
      <div className='left'>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div className='right' />
    </Container>
  )
}

export default Content
