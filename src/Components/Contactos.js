import { Col, Container, Row } from "react-bootstrap";
import misionImg from '../assets/img/3.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Contactos = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["T.O","Panchitos"];
    const [text, setTex] = useState("");
    const tiempo = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])
    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring (0, fulltext.length+1);
        setTex(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updateText === fulltext) {
            setisDeleting(true);
            setDelta(tiempo);
        }else if (isDeleting && updateText === '') {
                setisDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
            }
        }
        const [formData, setFormData] = useState({
            nombre: '',
            email: '',
            // Otros campos del formulario
          });
        
          // Función para manejar cambios en los campos del formulario
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          // Función para manejar el envío del formulario
          const handleSubmit = (e) => {
            e.preventDefault();
            // Lógica para manejar el envío de datos (puedes enviarlos a un servidor, almacenar en el estado global, etc.)
            console.log('Datos del formulario:', formData);
          };
        
    return(
        <section className="contactos" id="contactos">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Contactanos</span>
                     <h1>{'Llene el Formulario'}</h1>
                     <p>En nuestra comunidad educativa, valoramos la importancia de los contactos y la colaboración entre todos los miembros: padres, profesores y estudiantes. Creemos firmemente que la comunicación abierta y efectiva es fundamental para el éxito académico y personal de nuestros alumnos. Nos esforzamos por fomentar un ambiente donde las líneas de comunicación estén siempre abiertas, facilitando la colaboración activa entre padres y educadores. Estamos comprometidos en trabajar juntos para proporcionar a nuestros estudiantes no solo una educación excepcional, sino también un entorno de apoyo que enriquezca su experiencia escolar y contribuya a su desarrollo integral.</p>                      
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <h1 class=" text-white m-2 fs-3">Formulario</h1>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}