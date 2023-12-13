import { Col, Container, Row } from "react-bootstrap";
import misionImg from '../assets/img/ubicacion.png';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Direccion = () =>{
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
        <section className="direccion" id="direccion">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">¿Donde nos encontramos?</span>
                     <h1>{'Nuestra Dirección '}</h1>
                     <p>La arquitectura del templo corresponde al denominado Barroco Mestizo o Barroco andino, la planta es de cruz latina y la cubierta es abovedada. Posee un amplio atrio que actualmente se integra con los espacios públicos adyacentes conformando la Plaza Mayor de la ciudad.</p>                      
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                      <img src={misionImg} alt="header"/>   
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}