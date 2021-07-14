import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// CARDS 
const Box = styled.div`
  background: #fff;
  border: 8px;
`;

// MAIN CONTENT - changing the main tag to a personal one
const MainGrid = styled.main`
  display: grid;
  padding: 16px;
  grid-gap: 10px;

  @media (min-width: 860px) {
    grid-template-areas:
      "profileArea welcomeArea comuArea";
    grid-template-columns: 160px 618px 312px;
  }
`;

export default function Home() {
  return (
    <MainGrid>
      <title>Kukut</title>


      <div style={{gridArea: 'profileArea'}}>
        <Box >
          Images
        </Box>
      </div>

      <div style={{gridArea: 'welcomeArea'}}>
        <Box >
          Welcome
        </Box>
      </div>

      <div style={{gridArea: 'comuArea'}}>
        <Box >
          Communities
        </Box>
      </div>
    </MainGrid>
  )
}
