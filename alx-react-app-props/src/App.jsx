import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <h1>App Component</h1>
        <UserContext.Provider value={userData}>
        <ProfilePage/>
        </UserContext.Provider>
        
    </>
  )
    
}

export default App;