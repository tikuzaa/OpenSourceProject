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
//Getting User Data
async function getUserData(access_token) {
  // console.log("From user data function",access_token)
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
//Getting PR Data For Sayan Sanpui
async function getPullRequests(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/sayansanpui/Hackerspace_Portfolio-Flutter-App/pulls?state=all",
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

async function getIssues(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/sayansanpui/Hackerspace_Portfolio-Flutter-App/issues",
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
//Getting PR data from BIDISHA
async function getPullRequests1(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/bidisha-15/Quiz-app-backend/pulls?state=all",
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

async function getIssues1(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/bidisha-15/Quiz-app-backend/issues",
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

//Getting PR data from ANKIT-KODER
async function getPullRequests2(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/Ankit-Koder/cartoonify/pulls?state=all",
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

async function getIssues2(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/Ankit-Koder/cartoonify/issues",
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
//Debangan
async function getPullRequests3(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/tikuzaa/Quiz-app-frontend/pulls?state=all",
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

async function getIssues3(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/tikuzaa/Quiz-app-frontend/issues",
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
//Sayandip
async function getPullRequests4(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/sayandip-ghosh/Blog-Server-Side/pulls?state=all",
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

async function getIssues4(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/sayandip-ghosh/Blog-Server-Side/issues",
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
//Sahil
async function getPullRequests5(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/Sahil-047/notion-clone/pulls?state=all",
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

async function getIssues5(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/Sahil-047/notion-clone/issues",
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
//Muskaan
async function getPullRequests6(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/muskaand26-msit/my-blog-app/pulls?state=all",
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

async function getIssues6(access_token) {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/muskaand26-msit/my-blog-app/issues",
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

export  {getAccessToken, getUserData, getPullRequests, getIssues, getPullRequests1, getIssues1, getPullRequests2, getIssues2, getPullRequests3, getIssues3, getPullRequests4, getIssues4, getPullRequests5, getIssues5, getPullRequests6, getIssues6}