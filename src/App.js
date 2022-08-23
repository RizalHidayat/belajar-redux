import "./App.css";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

export default App;
