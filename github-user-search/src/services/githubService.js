import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const headers = {};

    // لو فيه API_KEY نزود Authorization
    if (API_KEY) {
      headers["Authorization"] = `Bearer ${API_KEY}`;
    }

    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;

  } catch (error) {
    // لو الخطأ بسبب Bad credentials → جرّب من غير Token
    if (error.response?.status === 401) {
      try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data;
      } catch (err) {
        console.error("Error fetching user without token:", err.response?.data || err.message);
        return null;
      }
    }

    console.error("Error fetching user:", error.response?.data || error.message);
    return null;
  }
};
