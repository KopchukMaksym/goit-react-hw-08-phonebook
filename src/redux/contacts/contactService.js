import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://63567ed1a2d1844a97762c40.mockapi.io/contacts',
});

export const getContactService = async () => {
  const { data } = await postsApi.get('/contacts');
  return data;
};

export const addContactService = async contact => {
  const { data } = await postsApi.post('/contacts', contact);
  return data;
};

export const deleteContactService = async id => {
  const { data } = await postsApi.delete(`/contacts/${id}`);
  return data;
};
