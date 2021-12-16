import './App.css';
import Header from "./Header/index"
import Profile from "./Profile/Profile"
import Menu from "./Menu/index"
import Dashboard from "./Dashboard/Dahboard"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/home" component={Profile} />
          <Route path="/dashboard" render={(props) => (
            <Dashboard {...props} name="Dashboard" />
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
