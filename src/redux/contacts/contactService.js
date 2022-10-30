import { privateApi } from 'api';

export const getContactService = async () => {
  try {
    const { data } = await privateApi.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addContactService = async contact => {
  try {
    const { data } = await privateApi.post('/contacts', contact);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactService = async id => {
  try {
    const { data } = await privateApi.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
