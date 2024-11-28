
import loader from './assets/loader.svg'
import { getAccessToken } from './callback/callback';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {

  
//url => code => access_token => local
const navigate = useNavigate()
useEffect(() => {
  async function fetchToken() {
    try {
      const token = await getAccessToken()
      if(token)
      {
        localStorage.setItem('access_token',token)
        setTimeout(() => {
          navigate('/dashboard') // to /dashboard
        }, 2000);
      }
      // console.log(token)
      // navigate('/')
    } catch (error) {
      console.log('err: ',error)
    }
  }
  fetchToken()
},[])

  return (
    <>
      {/* <img width={'100'} src={loader} alt="loader" />
      <p>redirecting to homepage...</p> */}

<div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
    </>
  );
};

export default Callback;
