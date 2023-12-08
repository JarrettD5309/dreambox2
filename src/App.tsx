import './App.css';

let user: string = " & Xtino";

const trueFalse: boolean = true;
user = " & Kate";

function App() {

  return (
    <div>

      <h1>Tony{user}</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{trueFalse.toString()}</p>
    </div>
  );
}

export default App;
