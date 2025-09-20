
import React from 'react'
import { useUserStore } from '../store/usersStore';
import { fetchUserData } from '../services/githubService';
import UserCard from './UserCard';
export default function Search() {
  const [username, setUsername] = React.useState("");
  const {setUser} = useUserStore();
  
  async function handelClick(event){
    event.preventDefault();
    const userNameTrimmed = username.trim();
    if(userNameTrimmed){
      const data=await fetchUserData(userNameTrimmed);
        setUser({
        img: data.avatar_url,
        name: data.name || data.login,
        username: data.login,
        profileUrl: data.html_url
        });
      console.log(data);
      setUsername("");
    }
  }
  
  return (
    <>
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input type="text" 
      placeholder='Enter user name ...'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      style={{
        width: "250px",
        padding: "10px 14px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
      }}
      />
      <button
      style={{
        padding: "10px 16px",
        backgroundColor: "#2563eb",
        color: "white",
        fontWeight: "600",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        cursor: "pointer",
      }}
      onClick={(event) => {handelClick(event)}}
      >Search
      </button>
    </form>
    <UserCard/>
  </>
  )
}
