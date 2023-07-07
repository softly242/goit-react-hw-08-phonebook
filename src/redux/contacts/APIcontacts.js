import axios from 'axios';

const URL_API = 'https://connections-api.herokuapp.com/contacts';

export const fetchContacts = async () => {
  return await axios.get(`${URL_API}`);
};

export const addContacts = async contact => {
  return await axios.post(`${URL_API}`, contact);
};

export const deleteContacts = async id => {
  return await axios.delete(`${URL_API}/${id}`);
};