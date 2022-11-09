import React from "react";
import { Carousel } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "../images/imgeoffice43.jpeg";
import image2 from "../images/imge643.jpeg";
import image3 from "../images/image (7).jpeg";
import image4 from "../images/adaptible.jpeg";
import image5 from "../images/imge1selssq.jpeg"
import "./pages.css";
function AboutMe() {
  return (
    <div className="about">
      <Card id="profile-card" style={{ width: '60vw'  }}>
      <Card.Img variant="top" src={image5} />
      <Card.Body>
        <Card.Title>Henry Macharia</Card.Title>
        <Card.Text>
          BSC Applied Physics and Computer Science
        </Card.Text>
        <Button  className="btn-main-offer" id = "certificate" >View Certificate</Button>
      </Card.Body>
    </Card>
    <div className="aboutme">
       
      
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Colaborative" />
          <Carousel.Caption>
            <h3>Collaborative</h3>
            <p>
              Brain storming features for a IOT devices platform at a workshop
              in Eldoret
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Adventurous" />

          <Carousel.Caption>
            <h3>Adventurous</h3>
            <p>Stopped to appreciate the beauty of Mother Nature</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Approachable</h3>
            <p>
              Always open and ready to answer and demystify technology to the
              uninformed
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Adaptable</h3>
            <p>I am always open to new ideas and new ways of doing things.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card id ="work-profile-card">
      <Card.Header>My work Profile</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Enthusiastic Software developer, avid coder, and Data analyst,
            always eager to learn and adapt to new challenges through hard work,
            attention to detail and organization. My goal is to continuously
            learn and improve and in turn develop a solid career leading to a
            senior position in the future that calls for further dedication,
            creativity, accurate decision making and problem solving. I will aim
            to achieve my goals alongside the company’s vision for a long - term
            success within a career progressive path.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        
      </Card.Body>
    </Card>
      
    </div>
    </div>
  );
}

export default AboutMe;
