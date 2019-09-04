import React from "react"
import { Animate } from "react-simple-animate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./page3.css";
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';

class Square1 extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    const divStyle = {
      display: "block",
      width: 50,
      height: 55,
      background: "#415A77",
      borderRadius: "5px",
      margin: "10px"
    };
    return (
      <>
        <Animate
          play={true}
          duration={2}
          start={{
            transform: "translateX(0)"
          }}
          end={{
            transform: "translate(70%)"
          }}
        >
          <div style={divStyle} />
        </Animate>
      </>
    );
  }
}
class Square2 extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    const divStyle = {
      display: "block",
      width: 50,
      height: 55,
      background: "#E0E1DD",
      borderRadius: "5px",
      margin: "10px"
    };
    return (
      <>
        <Animate
          play={true}
          duration={2}
          start={{
            transform: "translateX(0)"
          }}
          end={{
            transform: "translate(20%)"
          }}
        >
          <div style={divStyle} />
        </Animate>
      </>
    );
  }
}
class Square3 extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    const divStyle = {
      display: "block",
      width: 50,
      height: 55,
      background: "#778DA9",
      borderRadius: "5px",
      margin: "10px"
    };
    return (
      <>
        <Animate
          play={true}
          duration={2}
          start={{
            transform: "translateX(0)"
          }}
          end={{
            transform: "translate(50%)"
          }}
        >
          <div style={divStyle} />
        </Animate>
      </>
    );
  }
}
class Square4 extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    const divStyle = {
      display: "block",
      width: 50,
      height: 55,
      background: "#778DA9",
      borderRadius: "5px",
      margin: "10px"
    };
    return (
      <>
        <Animate
          play={true}
          duration={2}
          start={{
            transform: "translateX(0)"
          }}
          end={{
            transform: "translate(40%)"
          }}
        >
          <div style={divStyle} />
        </Animate>
      </>
    );
  }
}



class App extends React.Component {
  render() {
    return (
       
      <Layout >
     
        <Container>  
          <Row className="justify-content-md-center"
            style={{

            }}
          >
            <Col sm={3} />
            <Col
              style={{
                backgroundColor: "#E0E1DD",
                textAlign: "center",
                borderRadius: "3px",
                padding: "5px",
                margin: "2px",   
                }}
            >
              <h2>Bekant</h2>
            </Col>

            <Col
              style={{
                backgroundColor: "#778DA9",
                textAlign: "center",
                borderRadius: "3px",
                padding: "5px",
                margin: "2px"              }}
            >
              <h2>Medel</h2>
            </Col>

            <Col
              style={{
                backgroundColor: "#415A77",
                textAlign: "center",
                borderRadius: "3px",
                padding: "5px",
                margin: "2px"
              }}
            >
              <h2>Skicklig</h2>
            </Col>
          </Row>

          <Row style={{
            borderBottom: "1px dashed #E0E1DD"
          }}>
            <Col sm={3}>
            <h3 style={{color: "#E0E1DD"}}>Design</h3>
            </Col>
            <Col sm={8}>
              <Square1 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "1px dashed #E0E1DD",
          }}>
            <Col sm={3}>
            <h3 style={{color: "#E0E1DD"}}>Kod</h3>
            </Col>
            <Col sm={8}>
              <Square3 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "1px dashed #E0E1DD",
          }}>
            <Col sm={3}>
            <h3 style={{color: "#E0E1DD"}}>Animering</h3>
            </Col>
            <Col sm={8}>
              <Square4 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "1px dashed #E0E1DD",
          }}>
            <Col sm={3}>
            <h3 style={{color: "#E0E1DD"}}>Illustration</h3>
            </Col>
            <Col sm={8}>
              <Square2 />
            </Col>
          </Row>
        </Container>

      </Layout>

    );
  }
}

export default App;
