import React from 'react'
import { useUserStore } from '../store/usersStore';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [minRepos, setMinRepos] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { setUsers,users } = useUserStore();   // ✅ تعديل هنا
  
  async function handleClick(event) {
    event.preventDefault();    
    if (username.trim()) {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchUserData(
          username.trim(),
          location.trim(),
          minRepos.trim()
        );
        
        if (data.length > 0) {
          setUsers(data);   // ✅ نحفظ المصفوفة كلها
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
          <div className='user-cards-container'>
      {users.map((user) => (
        <section
          key={user.login}
          className='user-card'
        >
          {user.name && (
            <>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="120"
                style={{
                  borderRadius: "50%",
                  border: "3px solid #2563eb"
                }}
              />
              <h2 style={{ margin: "10px 0 0", fontSize: "1.5rem", color: "#333" }}>
                {user.name}
              </h2>
              <p style={{ margin: "4px 0", color: "#555" }}>
                @{user.login}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1e40af"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
              >
                View Profile
              </a>
            </>
          )}
        </section>
      ))}
    </div>
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
