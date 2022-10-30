import { privateApi, publicApi, token } from 'api';

export const createNewUserService = async user => {
  try {
    const { data } = await publicApi.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUserService = async login => {
  try {
    const { data } = await publicApi.post('/users/login', login);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoUserService = async () => {
  try {
    const { data } = await privateApi.get('/users/current');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logOutUserService = async userToken => {
  try {
    await privateApi.post('/users/logout', userToken);
    token.unset();
  } catch (error) {
    console.log(error);
  }
};
