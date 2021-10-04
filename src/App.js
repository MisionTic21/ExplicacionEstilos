import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="App">
      <span className="fondoNegro">Hola mundo</span>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <Card />
    </div>
  );
}

export default App;
