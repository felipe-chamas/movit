import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

interface Props {
  children: ReactNode
}

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
} | null

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

export const ChallengesContext = createContext<ChallengesContextData>({} as ChallengesContextData)

export const ChallengesProvider: React.FC<Props> = ({ children }: Props) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)

  const experienceToNextLevel = ((level + 1) * 4) ** 2

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const levelUp = () => setLevel(level + 1)
  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)

    if (Notification.permission === 'granted') {
      const notification = new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge?.amount} xp`
      })
      notification.onshow = () => new Audio('/notification.mp3').play()
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  const completeChallenge = () => {
    if (!activeChallenge) return

    let finalExperience: number = currentExperience + activeChallenge.amount

    if (finalExperience > experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        activeChallenge,
        challengesCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
