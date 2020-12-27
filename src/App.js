import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!!</h1>
        <h2>New Weather App coming!</h2>
        Learn React
        <Weather city="Brussels" />
      </header>
    </div>
  );
}

export default App;
