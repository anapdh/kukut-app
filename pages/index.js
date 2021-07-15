// import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { ProfileRelationsBoxWrapper } from '../src/components/Community'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/Commons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'anapdh'
  const favPeople = ['anapdh', 'gango-anan', 'jpdf00', 'aristides1000', 'juunegreiros', 'vichuge']


  return (
    //used to englobe 2 tags ore more in one = agrupador
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h3 className="title">
              Welcome
            </h3>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <p>Choose a name for your community:</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Select an URL for cover picture."
                  name="image"
                  aria-label="Select an URL for cover picture."
                />
              </div>
              <button type="submit">Submit</button>
            </form>

          </Box>
        </div>

        <div className="comuArea" style={{ gridArea: 'comuArea' }}>
          <ProfileRelationsBoxWrapper>
            <h4>Friends ({favPeople.length})</h4>
            <ul style={{ listStyle: 'none' }}>
              {favPeople.map(user => (
                <li>
                  <a href={`/users/${user}`} key={user}>
                    <img src={`https://github.com/${user}.png`} />
                    <span>{user}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Communities
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
