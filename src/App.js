import "./App.scss";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { screen1 } from "./Screens/screen1";
import MainPage from "./Screens/MainPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={MainPage} exact />
        <Route path="/page1" component={screen1} exact />
      </div>
    </Router>
  );
}

export default App;
