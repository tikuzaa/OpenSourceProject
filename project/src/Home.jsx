import { useState, useEffect} from "react"
import { getUserData } from "./callback/callback"
import UserInformation from "./UserInformation"


function Home() {

  const [user, setUser] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setUser(null)
  }
    
  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if(token !== null & user === null) {
      async function fetchUserData() {
        const data = await getUserData(token)
        setUser(data)
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
        <button onClick={handleLogin}>Log in With Github</button>
        : 
        <UserInformation userData={user} handleLogout={handleLogout} />
      }
      </>
    )
  }
  
  export default Home
  