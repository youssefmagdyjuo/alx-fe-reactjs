import ProfilePage from "./components/ProfilePage";
import UserContex from "./userContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <h1>App Component</h1>
      <UserContex.Provider value={userData}>
        <ProfilePage />
      </UserContex.Provider>
    </>
  );
}

export default App;
