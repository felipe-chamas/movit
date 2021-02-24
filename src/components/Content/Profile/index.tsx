import React, { useContext } from 'react'
import { ChallengesContext } from '../../../contexts/ChallengesContext'
import { Container } from './styles'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <img src='https://github.com/FelipeR2U.png' alt='Felipe Chamas' />
      <div>
        <strong>Felipe Chamas</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
