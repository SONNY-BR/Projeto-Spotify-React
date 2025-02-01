// import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header';
import Sidebar from './componentes/sidebar/Sidebar';
import Main from './componentes/main/Main';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
