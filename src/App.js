import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
              <Footer/>
            </Route>
            <Route path="/">
              <Header/>
              <Homepage/>
              <Footer/>
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;








