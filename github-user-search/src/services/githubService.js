const BASE_URL = "https://api.github.com";

export async function fetchUserData(username, location = "", minRepos = "") {
  try {
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const searchUrl = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
    const response = await fetch(searchUrl);
    if (!response.ok) throw new Error("Search request failed");

    const data = await response.json();
    if (data.total_count === 0) return [];

    // هنا باخد الداتا زي ما هي من السيرش من غير ما أعمل requests تانية
    return data.items.map(user => ({
      img: user.avatar_url,
      name: user.login,       // مفيش name هنا، لو محتاجه لازم request تاني
      username: user.login,
      html_url: user.html_url,
    }));

  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
