import React from 'react'
import ExperienceBar from './components/ExperienceBar'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <div className='app'>
      <GlobalStyle />
      <ExperienceBar />
    </div>
  )
}

export default App
