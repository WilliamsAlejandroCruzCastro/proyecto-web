import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export const Admisiones = () =>{
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
        <section className="admisiones" id="admisiones">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                     <span className="tagline">¿Admisiones?</span>
                     <h1>{'Admisiones '}</h1>
                     <p>La Unidad Educativa San Francisco comunica que, la modalidad de inscripción de la presente gestión se realizará en los predios del Coliseo Rev. Francis Harrington de los niveles: Educación Inicial en Familia Comunitaria, Educación Primaria Comunitaria Vocacional y Educación Secundaria Comunitaria Productiva, a partir del 16 de enero bajo el siguiente cronograma de inscripciones</p>                      
                    </Col>  
                    <Col xs={12} md={6} xl={5}>
                    <ReactPlayer
          url={require('../assets/img/Colegio San Francisco (Aniv. 2022)(360P).mp4')}
          className='react-player'
          playing
          controls
                            loop
          width='100%'
          height='100%'
        />  
                    </Col>                  
                </Row>
            </Container>
        </section>
    )
}