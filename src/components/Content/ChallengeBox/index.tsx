import React, { useContext } from 'react'
import { ChallengesContext } from '../../../contexts/ChallengesContext'
import { CountdownContext } from '../../../contexts/CountdownContext'
import { Container, Button } from './styles'

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  const handleFailedChallenge = () => {
    resetChallenge()
    resetCountdown()
  }

  const handleCompletedChallenge = () => {
    completeChallenge()
    resetCountdown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <div className='active'>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt='Body' />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <Button type='button' color='failed' onClick={handleFailedChallenge}>
              Falhei
            </Button>
            <Button type='button' color='completed' onClick={handleCompletedChallenge}>
              Completei
            </Button>
          </footer>
        </div>
      ) : (
        <div className='not-active'>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </Container>
  )
}

export default ChallengeBox
