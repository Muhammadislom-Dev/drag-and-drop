import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./pages/Card";
import DataLength from "./pages/DataLength";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-page">
        <Sidebar />
        <div className="App-list">
          <DataLength />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
