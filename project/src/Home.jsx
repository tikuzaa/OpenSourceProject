import { useState, useEffect} from "react"
import { getUserData, getPullRequests } from "./callback/callback"
import UserInformation from "./UserInformation"


function Home() {

  const [user, setUser] = useState(null)
  const [pullRequests, setPullRequests] = useState([])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setUser(null)
    setPullRequests([])
  }
    
  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if(token !== null & user === null) {
      async function fetchUserData() {
        const data = await getUserData(token)
        setUser(data)

        // Fetch pull requests after user data is retrieved
        const prData = await getPullRequests(token);
        setPullRequests(prData);
      }
      
    fetchUserData()
    }

    
  }, [user])

  const handleLogin = () => {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=Ov23liJXs3PPaCWpwZsh&scope=user'
  }
  
  return (
      <>
      {
        user === null ? 
        <button onClick={handleLogin}>Log in With Github</button> //add landing page here
        : 
        <UserInformation userData={user} pullRequests={pullRequests} handleLogout={handleLogout} />
      }
      </>
    )
  }
  
  export default Home
  