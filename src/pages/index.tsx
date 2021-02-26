import React, { useContext } from 'react'
import { GetServerSideProps } from 'next'
import Header from '../components/Header'
import Content from '../components/Content'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import LevelUpModal from '../components/LevelUpModal'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { isLevelUpModalOpen } = useContext(ChallengesContext)

  return (
    <ChallengesProvider {...props}>
      <div className='app'>
        <Header />
        <CountdownProvider>
          <Content />
        </CountdownProvider>
        {isLevelUpModalOpen && <LevelUpModal />}
      </div>
    </ChallengesProvider>
  )
}

export default Home
