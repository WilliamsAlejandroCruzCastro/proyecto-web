import { Navbar,Container,Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NavBar = ( ) =>{
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink]= useState ('inicio');
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(true);
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

   return <div>
    <Navbar expand="xl" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className=" navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
            <Nav.Link href="#informacion" className={activeLink === 'informacion' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('informacion')}>Informacion</Nav.Link> 
            <Nav.Link href="#mision" className={activeLink === 'mision' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('mision')}>Mision</Nav.Link>
            <Nav.Link href="#colegio" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('colegio')}>Colegio</Nav.Link>  
            <Nav.Link href="#noticias" className={activeLink === 'noticias' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('noticias')}>Noticias</Nav.Link>
            <Nav.Link href="#admisiones" className={activeLink === 'admisiones' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('admisiones')}>Admiciones</Nav.Link> 
            <Nav.Link href="#circulares" className={activeLink === 'circulares' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('circulares')} >Circulares</Nav.Link>
            <Nav.Link href="#direccion" className={activeLink === 'direccion' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('direccion')} >Direccion</Nav.Link>
            <Nav.Link href="#contactos" className={activeLink === 'contactos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contactos')}>Contactos</Nav.Link>   
            <Nav.Link href="#creditos" className={activeLink === 'creditos' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('creditos')}>Creditos</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>;  
     
}