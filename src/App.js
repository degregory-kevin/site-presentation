

import Home from './Pages/Home';
import Contact from './Pages/Contact' ;
import Knowledges from './Pages/Knowledges' ;
import NotFound from './Pages/NotFound' ;
import Portfolio from './Pages/Portfolio' 
import './styles/styles.scss'

import {  BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/knowledges" component={Knowledges} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route  component={NotFound} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
