import Search from "./components/Search";
import UserCard from "./components/UserCard";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>
      <Search/>
      <UserCard/>
    </div>
  );
}

export default App;
