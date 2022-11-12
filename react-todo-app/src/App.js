import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
//import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>

      {/* Bootstrap Navigation Bar */}
      <NavBar />

      {/* Main App */}
      <Container>
        <main></main>
      </Container>

    </>
  );
}

export default App;
