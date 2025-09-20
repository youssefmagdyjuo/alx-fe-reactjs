// src/services/githubService.js

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username, location = "", minRepos = "") {
  try {
    // نبني query string
    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const searchUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) {
      throw new Error("Search request failed");
    }

    const searchData = await searchResponse.json();

    if (searchData.total_count === 0) {
      return null; // مفيش مستخدمين بالمعايير دي
    }

    // نجيب أول مستخدم من النتائج (ممكن تتوسع لاحقاً تعرض list كاملة)
    const user = searchData.items[0];

    // نجيب تفاصيل أعمق عن المستخدم
    const userResponse = await fetch(`${BASE_URL}/users/${user.login}`);
    if (!userResponse.ok) {
      throw new Error("User details request failed");
    }

    const userData = await userResponse.json();
    return userData;

  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
