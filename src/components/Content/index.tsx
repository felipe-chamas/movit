import React from 'react'
import Head from 'next/head'

import { Container } from './styles'

import Profile from './Profile'
import CompletedChallenges from './CompletedChallenges'
import Countdown from './Countdown'
import ChallengeBox from './ChallengeBox'

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
      <div className='right'>
        <ChallengeBox />
      </div>
    </Container>
  )
}

export default Content
