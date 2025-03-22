import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBlogs = async () => {
  const { data } = await axios.get('/blog.json'); 
  return data;
};

const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });
};

export default useBlogs;
