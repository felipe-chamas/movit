import React from 'react'

import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ChallengesProvider } from '../contexts/ChallengesContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChallengesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
