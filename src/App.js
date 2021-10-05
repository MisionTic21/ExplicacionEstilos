import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input type="email"/>
        <input type="file"/>
        <input type="number" max="10"/>
        <input type="password"/>
        <input type="text" required/>
        <input type="text" defaultValue="Mauro" disabled/>
        <select required defaultValue={0}>
          <option disabled value={0}>
            Seleccione una opción
          </option>
          <option>Op 1</option>
          <option>Op 2</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
