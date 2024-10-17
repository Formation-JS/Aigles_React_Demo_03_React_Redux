import axios from 'axios';


export const requestUserLogin = async (email: string, password: string) => {

  const {data} = await axios.post('http://localhost:3000/login', {email, password})

  return {
    token: data.accessToken,
    email: data.user.email
  }
}
