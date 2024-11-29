import axios from 'axios'

async function getAccessToken() {

     //code 
    const code = new URLSearchParams(window.location.search).get('code')

      const res = await axios.post(
      "/login/oauth/access_token",
      {
        client_id:'Ov23liJXs3PPaCWpwZsh',
        client_secret:'e897822e84059a2aeb2b69b0e874e7c0481e2225',
        code:code
      }
      
    )
 
    const access_token = new URLSearchParams(res.data).get('access_token')
    return access_token
    
}

async function getUserData(access_token) {
  console.log("From user data function",access_token)
  const userResponse = await axios.get(
    "/user",
    {
        headers: {
            'Authorization':`Bearer ${access_token}`
        }
    }
)
return userResponse.data

}

async function getPullRequests(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/sayandip-ghosh/EMS/pulls?state=all",
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    );
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}

async function getPullRequests1(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/bidisha-15/Hacktoberfest2024-pravo/pulls?state=all",
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    );
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}

export  {getAccessToken, getUserData, getPullRequests, getPullRequests1}