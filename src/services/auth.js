import api from './api';



export async function signInRequest({ login, password }) {
  const response = await api.post('/login', {
    "login": login,
    "password":password
  });

  const { accessToken: token } = response.data;
  console.log(token)

   return { token };
}

export async function recoverUserInformation() {
  const response = await api.get('/token/data');
  
  const {
    id, 
    name,
    login,
    roles
  } = response.data;

  return {
    user: {
      id,
      name,
      login,
      roles
    }
  }
}