import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  return (
    <MainGrid>
      <title>Kukut</title>


      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <Box >
          Profile
          <img src="https://github.com/anapdh.png"/>
        </Box>
      </div>

      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box >
          Welcome
        </Box>
      </div>

      <div className="comuArea" style={{gridArea: 'comuArea'}}>
        <Box >
          Friends
        </Box>
        <Box >
          Communities
        </Box>
      </div>
    </MainGrid>
  )
}
