
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
      localStorage.setItem('access_token',token)
      navigate('/')
    } catch (error) {
      console.log('err: ',error)
    }
  }
  fetchToken()
},[])

  return (
    <>
      <img width={'100'} src={loader} alt="loader" />
      <p>redirecting to homepage...</p>
    </>
  );
};

export default Callback;
