import React, { useEffect, useState } from 'react'
import { Container, Button } from './styles'

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const startCountDown = () => {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => setTime(time - 1), 1000)
    }
  }, [active, time])

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
      <Button type='button' onClick={startCountDown}>
        Iniciar um ciclo
      </Button>
    </>
  )
}

export default Countdown