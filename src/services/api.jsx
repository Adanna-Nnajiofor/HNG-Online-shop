import axios from "axios";

const API_URL = "https://api.timbu.cloud/products";

const GetProducts = async (page = 1, size = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        organization_id: import.meta.env.VITE_APP_ORGANIZATION_ID,
        reverse_sort: false,
        page,
        size,
        APP_ID: import.meta.env.VITE_APP_APP_ID,
        API_KEY: import.meta.env.VITE_APP_TIMBU_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export { GetProducts };
