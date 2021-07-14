import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    // reset
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    // make imgs responsive
    max-width: 100%;
    height: auto;
    display: block;
  }

  body {  
    background-color: #d9e6f6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

const theme = {
  colors: {
    // primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
