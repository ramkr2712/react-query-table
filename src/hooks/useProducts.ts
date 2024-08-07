import { useQuery } from 'react-query';
import { mockData } from '../data/mockData'; 


const fetchProducts = async () => {
  return mockData;
};

export const useProducts = () => {
  return useQuery(['products'], fetchProducts);
};

// We can also use below format if we directly get the data from Api, but here im just used the Mock Data
// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchProducts = async () => {
//   const { data } = await axios.get('/api/products'); // Replace with your API endpoint
//   return data;
// };

// export const useProducts = () => {
//   return useQuery('products', fetchProducts);
// };