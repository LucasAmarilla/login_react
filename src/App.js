import './App.css';
import Login from './components/Login';

const userReg = false;

function App() {
  return (
    
    <div className="container">
    <Login isRegistered={userReg}/>
      
    </div>


  );
}

export default App;
