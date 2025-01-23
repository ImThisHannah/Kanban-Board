import { UserLogin } from "../interfaces/UserLogin";
import axios from 'axios';

const login = async (userInfo: UserLogin) => {
// TODO: make a POST request to the login route

    const response = await axios.post('/api/login', userInfo); 
    const token = response.data.token; 

    localStorage.setItem('token', token);

    return token; 
  }


export { login };
