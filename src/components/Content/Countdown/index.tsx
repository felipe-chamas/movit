import React, { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../../contexts/ChallengesContext'
import { Container, Button } from './styles'

let timeoutHandler: NodeJS.Timeout

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const handleCountDown = () => {
    if (isActive) {
      clearTimeout(timeoutHandler)
      setTime(0.1 * 60)
    }
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      timeoutHandler = setTimeout(() => setTime(time - 1), 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      <Button disabled={hasFinished} type='button' onClick={handleCountDown} active={isActive}>
        {hasFinished ? 'Ciclo encerrado' : isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
      </Button>
    </>
  )
}

export default Countdown
