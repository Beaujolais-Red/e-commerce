import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Homepage/>
      </Router>
    </div>
  );
}

export default App;
