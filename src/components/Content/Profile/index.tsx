import React from 'react'
import { Container } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <img src='https://github.com/FelipeR2U.png' alt='Felipe Chamas' />
      <div>
        <strong>Felipe Chamas</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default Profile
