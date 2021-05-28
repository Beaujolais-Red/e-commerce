import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/">
              <Header/>
              <Homepage/>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
