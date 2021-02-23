import React from 'react'
import { Container } from './styles'

const ExperienceBar: React.FC = () => {
  const percentage = `${0.6 * 100}%`

  return (
    <Container>
      <span>0 xp</span>
      <div className='bar'>
        <div style={{ width: percentage }} />
        <span style={{ left: percentage }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </Container>
  )
}

export default ExperienceBar
