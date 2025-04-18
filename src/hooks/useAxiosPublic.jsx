import axios from 'axios';

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'https://dailytalim.cpik.ac.bd',
  });
  return axiosPublic;
};

export default useAxiosPublic;
