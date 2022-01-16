import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import Login from './pages/Login';
function App() {
  const isAuthenticated= window?.isAuthenticated;
  return (
    <div className="App">

      <Navi/>
      <Container className='main'>
       { <Dashboard />}
      </Container>
    </div>
  );
}

export default App;
