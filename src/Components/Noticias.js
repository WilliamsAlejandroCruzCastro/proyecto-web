import { Col, Container, Row } from "react-bootstrap";
import noticiasImg from '../assets/img/8.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Noticias = () =>{
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
        <section className="noticias" id="noticias">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Noticias</span>
                     <h1>{'Sobre nosotros 116 años al servicio de la Educación Boliviana Forjando los lideres del futuro! '}</h1>
                     <p>El MODELO EDUCATIVO está estratégicamente definido bajo el concepto de Educación Técnica Humanista Integral, donde fortalecemos el SER y luego el HACER, enseñanza para la Comprensión y Modificabilidad Estructural Cognitiva, con la Didáctica de la Metodología Cooperativa.</p>  
                     <p>Somos una institución con más de 116 años entregando educación de primer nivel, nos reconocen por la solidez formativa, en el que nuestros estudiantes han demostrado un desempeño académico destacado</p>                    
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                      <img src={noticiasImg} alt="header"/>   
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}