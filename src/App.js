import "./App.css";
import Weather from "./Weather";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card frame">
          <div className="card-body">
            <div className="row">
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
