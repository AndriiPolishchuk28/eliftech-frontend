import axios from 'axios';

axios.defaults.baseURL = 'https://eliftech-test-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

export const fetchEvents = async (page, field, order) => {
  try {
    const params = { page };
    if (field && order) {
      params.field = field;
      params.order = order;
    }
    const { data } = await axios.get('/', { params });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (id, userInfo) => {
  try {
    const { data } = await axios.post(`/register/${id}`, userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchParticipants = async (id) => {
  try {
    const { data } = await axios.get(`/participants/${id}`);
    if (data) {
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};
