import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';  
import { Banner } from './Components/Banner';
import { Mision } from './Components/Mision';
import { Informacion } from './Components/Informacion';
import { Colegio } from './Components/Colegio';
import { Noticias } from './Components/Noticias';
import { Admisiones } from './Components/Admisiones';
import { Circulares } from './Components/Circulares';
import { Direccion } from './Components/Direccion';
import { Contactos } from './Components/Contactos';
import { Creditos } from './Components/Creditos';
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Informacion/>
      <Mision/> 
      <Colegio/> 
      <Noticias/>
      <Admisiones/> 
      <Circulares/> 
      <Direccion/>
      <Contactos/> 
      <Creditos/> 
      <footer/>                     
    </div>
  );
}
export default App;
