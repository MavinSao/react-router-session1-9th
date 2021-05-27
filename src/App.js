import Menu from "./components/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from "react-bootstrap";
import URLParam from "./views/URLParam";
import QueryParameter from "./views/QueryParameter";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <ProtectedRoute exact path='/'>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path='/about'>
            <About />
          </ProtectedRoute>
          <Route path='/urlParam/:id' render={() => <URLParam />} />
          <Route path='/queryParameters' render={() => <QueryParameter />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/contact' >
            <Contact />
          </Route>
          <Route path='*' render={() => <Container><h1>404 Page Not Found</h1></Container>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
