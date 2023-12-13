import { Col, Container, Row } from "react-bootstrap";
import misionImg from '../assets/img/3.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Mision = () =>{
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
        <section className="mision" id="mision">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">¿QUIENES SOMOS?</span>
                     <h1>{'Mision '}</h1>
                     <p>Nuestra calidad educativa la logramos no solo a través de nuestros planes y programas, maestros y espacios sino a través de nuestra formación integral que contempla distintas áreas de la persona, en el día a día buscamos que los estudiantes desarrollen su máximo potencial en un ambiente sano y enriquecedor.

Hemos estado convencidos desde hace 115 años que una educación de calidad no debe de ser un privilegio exclusivo y estamos comprometidos con ofrecer esta solución en nuestra ciudad.</p>                      
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                      <img src={misionImg} alt="header"/>   
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}