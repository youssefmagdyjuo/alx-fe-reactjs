import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const userData = await getUser(username);
    setUser(userData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <SearchBar onSearch={handleSearch} />
      {user && (
        <div className="mt-6 flex justify-center">
          <UserCard user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
