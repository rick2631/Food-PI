import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import { Landing,Home,Form,Detail} from './views';

function App() {

  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route exact={true} path="/create">
            <Form />
          </Route>
          <Route exact={true} path="/home/:id">
            <Detail />
          </Route>
          <Route exact={true} path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
