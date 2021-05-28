import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
