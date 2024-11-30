import { useState, useEffect} from "react"
import { getUserData, getPullRequests, getIssues, getPullRequests1 } from "./callback/callback"
import UserInformation from "./UserInformation"
import { useNavigate } from "react-router-dom"
import LandingPage from "./LandingPage"


function Dashboard() {

  const [user, setUser] = useState(null)
  const [pullRequests, setPullRequests] = useState([])
  const [issues, setIssues] = useState([])
  const [pullRequests1, setPullRequests1] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setUser(null)
    navigate('/')
    setPullRequests([])
    setIssues([])
    setPullRequests1([])
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
        const issueData = await getIssues(token);
        setIssues(issueData)
        const prData1 = await getPullRequests1(token);
        setPullRequests1(prData1);
      }
      
    fetchUserData()
    }

    
  }, [user])
  
  return (
      <>
      {
        user !== null ? 
        //<button onClick={handleLogin}>Log in With Github</button> //add landing page here
        <UserInformation userData={user} pullRequests={pullRequests} issues={issues} handleLogout={handleLogout} 
        pullRequests1={pullRequests1}
        /> : null

        
      }
      </>
    )
  }
  
  export default Dashboard
  