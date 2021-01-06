import "./App.css";
import Weather from "./Weather";
import Cities from "./Cities";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card frame">
          <div className="card-body">
            <div className="row">
              <Cities />
              <Weather defaultCity="Paris" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
