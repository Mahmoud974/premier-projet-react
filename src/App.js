import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Presentation from './pages/Presentation';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Competences from './pages/Competences';
import Notfound from './pages/Notfound';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">

      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Presentation}/>
        <Route path="/exp"  component={Experience}/>
        <Route path="/portfolio"  component={Portfolio}/>
        <Route path="/comp"  component={Competences}/>
        
        <Route component={Notfound}/>
      </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
