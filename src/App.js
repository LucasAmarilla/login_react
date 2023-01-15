import './App.css';
import Login from './components/Login';

const isLogged = false

function App() {
  return (
    <div className="container">
      {isLogged === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
