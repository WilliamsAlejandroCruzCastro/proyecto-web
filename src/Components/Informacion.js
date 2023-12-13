import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/6.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
export const Informacion = () =>{
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
    return(
        <section className="banner" id="informacion">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Un buen comienzo para un buen futuro!</span>
                     <h1>{'Colegio San Francisco '}</h1>
                     <p>El Colegio San Francisco es Tradición y Experiencia al tener casi 115 años de trayectoria y a la vez  porque Somos evolución ya que de manera continua mejoramos y nos preparamos para cambiar la educación y así formar a los estudiantes para el mundo actual con las habilidades, conocimientos y valores para desenvolverse con éxito.

Buscamos dejar huella en nuestros estudiantes, donde además de los logros que obtengan a lo largo de su vida, sean personas que se desenvuelven de forma íntegra, empática, responsable y respetuosa con los demás y con su entorno.</p>
                      
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt="header"/>   
                    </Col>
                </Row>
            </Container>
        </section>
     )
}