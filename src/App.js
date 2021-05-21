import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Questionradio from './components/Questionradio';
import Question from './components/Question';

function App() {

  return (

    <div className="App">
      <AppBar position="static" color="secondary" style={{ marginBottom: '30px' }}>
        <Typography variant="h4">
          Taitokysely
        </Typography>
      </AppBar>
      
      <Router >
        <div>
          <Link to="/">Textfield</Link>{' '}
          <Link to="/radio">Radio</Link>

          <Switch>
            <Route exact path="/" component={Question} />
            <Route exact path="/radio" component={Questionradio} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
