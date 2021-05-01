import './App.css';
import Header from '../src/components/Header/Header';
import Allclubs from './components/Allclubs/Allclubs';
import Clubdetails from './components/Clubdetails/Clubdetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <Router>
    <Switch>

         <Route path="/allclubs">
         <Header></Header>
         <Allclubs></Allclubs>
         </Route>

         <Route path="/clubdetails/:clubId">
              <Clubdetails></Clubdetails>
         </Route>

         <Route exact path="/">
         <Header></Header>
         <Allclubs></Allclubs>
         </Route>

         <Route path="*">
           <Notfound></Notfound>
         </Route>

    </Switch>
    </Router>
  );
}

export default App;
