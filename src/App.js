import './App.css';
import Header from "./Header/index"
import Profile from "./Main/Main"
import Menu from "./Menu/index"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/home" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
