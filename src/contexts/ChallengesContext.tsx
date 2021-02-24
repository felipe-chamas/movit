import { createContext, ReactNode, useState } from 'react'
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
}

export const ChallengesContext = createContext<ChallengesContextData>({} as ChallengesContextData)

export const ChallengesProvider: React.FC<Props> = ({ children }: Props) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null)

  const experienceToNextLevel = ((level + 1) * 4) ** 2

  const levelUp = () => setLevel(level + 1)
  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
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
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
