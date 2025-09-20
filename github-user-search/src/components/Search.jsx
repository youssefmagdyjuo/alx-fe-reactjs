import React from 'react'
import { useUserStore } from '../store/usersStore';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [minRepos, setMinRepos] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { setUser } = useUserStore();
  
  async function handleClick(event) {
    event.preventDefault();
    const userNameTrimmed = username.trim();
    
    if (userNameTrimmed) {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchUserData(userNameTrimmed);
        if (data) {
          // فلترة إضافية حسب location و minRepos
          if (
            (location && data.location?.toLowerCase() !== location.toLowerCase()) ||
            (minRepos && data.public_repos < parseInt(minRepos))
          ) {
            setError("Looks like we cant find the user with those filters");
          } else {
            setUser({
              img: data.avatar_url,
              name: data.name || data.login,
              username: data.login,
              profileUrl: data.html_url,
              location: data.location,
              repos: data.public_repos
            });
          }
        } else {
          setError("Looks like we cant find the user");
        }
      } catch {
        setError("Looks like we cant find the user");
      } finally {
        setLoading(false);
        setUsername("");
      }
    }
  }
  
  return (
    <>
      <form
        onSubmit={handleClick}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text" 
          placeholder='Enter user name ...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text" 
          placeholder='Enter location (optional)'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number" 
          placeholder='Minimum repositories (optional)'
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  )
}

const inputStyle = {
  width: "250px",
  padding: "10px 14px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  padding: "10px 16px",
  backgroundColor: "#2563eb",
  color: "white",
  fontWeight: "600",
  border: "none",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
  cursor: "pointer",
};
