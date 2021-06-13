import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <h1>Ecommerce app</h1>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
