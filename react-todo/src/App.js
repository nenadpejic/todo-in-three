import './scss/resets.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, About } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </div>
  );
}

export default App;
