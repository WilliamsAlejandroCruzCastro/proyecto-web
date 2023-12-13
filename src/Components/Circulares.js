import { Col, Container, Row } from "react-bootstrap";
import misionImg from '../assets/img/3.jpg';
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/0.jpg';
import img2 from '../assets/img/15.jpg';
import img3 from '../assets/img/11.jpg';
import img4 from '../assets/img/4.jpg';
export const Circulares = () =>{
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
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
    return(
        <section className="circulares" id="circulares">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">Circulares</span>
                     <h1>{'Comunicados '}</h1>
                     <p>Colegio San Francisco COMUNICADO  IA/DG/ADM/063/23  ESTIMADA COMUNIDAD FRANCISCANA Por medio del presente comunicamos, que el retorno clases en la modalidad presencial se reanudará a partir del miércoles 8 de noviembre del presente año, en los horarios merin habituales correspondientes a los distintos niveles. Agradecemos gentil atención.  QUE DIRECCIÓN GENERAL BOLIVIA La noviembre 07, 2023 DIRECCIÓN GENERAL</p>                       
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                    <h2>Informaciones</h2>
                    <Carousel responsive={responsive}>
                     <div>
                        <img src={img1} alt="image"/>
                     </div>
                     <div>
                     <img src={img2} alt="image"/>
                     </div>
                     <div>
                     <img src={img3} alt="image"/>
                     </div>
                     <div>
                     <img src={img4} alt="image"/>
                     </div>
                    </Carousel>
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}