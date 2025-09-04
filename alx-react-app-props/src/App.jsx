import ProfilePage from "./components/ProfilePage";
import userContext from "./userContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <userContext.Provider value={userData}>
        <ProfilePage />
      </userContext.Provider>
    </>
  );
}

export default App;
