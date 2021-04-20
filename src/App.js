import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Radiobutton from './components/Radiobutton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Textfield from './components/Textfield';
import Button from '@material-ui/core/Button';

function App() {

  return (

    <div className="App">
      <AppBar position="static" color="secondary" style={{ marginBottom: '30px' }}>
        <Typography variant="h4">
          Taitokysely
        </Typography>
      </AppBar>
      
      <Router>
        <div>
          <Link to="/">Radiobutton</Link>{' '}
          <Link to="/textfield/">Textfield</Link>{' '}

          <Switch>
            <Route exact path="/" component={Radiobutton} />
            <Route exact path="/textfield/" component={Textfield} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
