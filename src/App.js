import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
