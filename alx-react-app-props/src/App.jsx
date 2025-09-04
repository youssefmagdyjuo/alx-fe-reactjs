import ProfilePage from "./components/ProfilePage";
import UserContex from "./components/UserContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <UserContex.Provider value={userData}>
        <ProfilePage />
      </UserContex.Provider>
    </>
  );
}

export default App;
