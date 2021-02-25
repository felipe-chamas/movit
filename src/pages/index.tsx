import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { CountdownProvider } from '../contexts/CountdownContext'

const Home: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <CountdownProvider>
        <Content />
      </CountdownProvider>
    </div>
  )
}

export default Home
