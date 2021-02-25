import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChallengesContext'

interface Props {
  children: ReactNode
}

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

let timeoutHandler: NodeJS.Timeout
const initialTime = 0.1 * 60

export const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData)

export const CountdownProvider: React.FC<Props> = ({ children }: Props) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(timeoutHandler)
    setIsActive(false)
    setHasFinished(false)
    setTime(initialTime)
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
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
