import { useState, useEffect} from "react"
import { getUserData, getPullRequests } from "./callback/callback"
import UserInformation from "./UserInformation"
import { useNavigate } from "react-router-dom"
import LandingPage from "./LandingPage"


function Dashboard() {

  const [user, setUser] = useState(null)
  const [pullRequests, setPullRequests] = useState([])

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setUser(null)
    navigate('/')
    setPullRequests([])
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if(token !== null && user === null) {
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
  
  return (
      <>
      {
        user !== null ? 
        //<button onClick={handleLogin}>Log in With Github</button> //add landing page here
        <UserInformation userData={user} pullRequests={pullRequests} handleLogout={handleLogout} /> : null

        
      }
      </>
    )
  }
  
  export default Dashboard
  