import Timer from "./Timer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="header">Happy New Year in</h1>
        <Timer />
      </div>
      <footer>
        <p>Federico Rivero &copy; 2022</p>
      </footer>
    </div>
  );
}

export default App;
