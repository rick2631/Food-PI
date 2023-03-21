import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import { Landing,Home,Form,Detail} from './views';

function App() {

  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact={true} path="/">
            <Landing />
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
