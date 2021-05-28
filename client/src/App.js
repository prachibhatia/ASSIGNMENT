import './App.css';
import Content from './Content';
import Employee from './Employee';
import NewUser from './NewUser'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Content/>
        </Route>
        <Route path="/Employee">
          <Employee/>
        </Route>
        <Route path="/NewUser">
          <NewUser/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
