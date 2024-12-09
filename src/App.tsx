import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
