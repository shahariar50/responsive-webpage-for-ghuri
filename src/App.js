import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
