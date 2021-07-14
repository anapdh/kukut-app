import styled from 'styled-components'

// MAIN CONTENT - changing the main tag to a personal one
const MainGrid = styled.main`
  width: 100%;
  // max-width: 500px;
  margin: 0 auto;
  display: grid;
  padding: 16px;
  grid-gap: 10px;

  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    grid-template-areas:
      "profileArea welcomeArea comuArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;