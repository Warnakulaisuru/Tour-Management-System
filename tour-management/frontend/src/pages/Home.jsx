import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle';

const Home = () => {
  return <>
    {/* --hero section start-- */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling opens the door to creating {""}
                <span className="highlight">memories</span>
              </h1>
              <p>
              This tiny Paradise Island which is on the Indian Ocean is one of the most popular tourist destinations in the world. The World Explorer from 16th of Century “Marco Polo” wrote that Sri Lanka is the finest Island in the whole world and Lonely Planet magazine has ranked Sri Lanka as World’s No 1 travel destination for 2019. Sri Lanka contains a great mixture of unique golden and pristine beaches, dense wildlife, a rich cultural heritage, Over 2500 years old enchanting Ancient Ruins, Colorful festivals, diverse ethnical groups, amazing unbelievable landscapes and the great hospitality from the local people will make you to come back to Sri Lanka. Renowned worldwide, Ceylon Tea is one of Sri Lanka’s prime exports and a visit to a tea plantation and factory to be enlightened about Sri Lanka’s 150 year old tea industry is a must for most tourists.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* --hero section start-- */}
  </>;
};

export default Home;
