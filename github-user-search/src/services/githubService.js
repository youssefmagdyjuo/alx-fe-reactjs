import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username, location = "", minRepos = "") {
  try {
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const searchUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;
    const response = await axios.get(searchUrl);
    const data = response.data;
    if (data.total_count === 0) return [];

    return data.items.map(user => ({
      img: user.avatar_url,
      name: user.login, // No name field here, need another request if required
      username: user.login,
      html_url: user.html_url,
    }));

  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
