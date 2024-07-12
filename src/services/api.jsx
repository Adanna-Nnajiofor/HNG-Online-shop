// src/api.js
// const BASE_URL = "https://api.timbu.cloud/products";

// export const fetchProducts = async (page = 1, size = 10) => {
//   const response = await fetch(
//     `${BASE_URL}?organization_id=123&reverse_sort=false&page=${page}&size=${size}&APP_ID=123&API_KEY=${process.env.REACT_APP_TIMBU_API_KEY}`
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

import axios from "axios";

const API_URL = "https://api.timbu.cloud/products";

const GetProducts = async (page = 1, size = 10) => {
  const response = await axios.get(API_URL, {
    params: {
      organization_id: process.env.REACT_APP_ORGANIZATION_ID,
      reverse_sort: false,
      page,
      size,
      APP_ID: process.env.REACT_APP_APP_ID,
      API_KEY: process.env.REACT_APP_TIMBU_API_KEY,
    },
  });
  return response.data;
};

export { GetProducts };
