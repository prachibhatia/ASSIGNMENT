import './App.css';
import Content from './Content';
import Employee from './Employee';
import NewUser from './NewUser';
import EmployeeDashboard from'./EmployeeDashboard'
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
        <Route path="/EmployeeDashboard">
          <EmployeeDashboard/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
