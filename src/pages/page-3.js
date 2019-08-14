import React from "react"
import { Animate, AnimateGroup } from "react-simple-animate";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./page3.css";
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';


function ListItem(props) {
  return (
    <div className="hejsan" style={{  display: "inline-block", color: "white"}}>
      <Animate
        style={{}}
        sequenceIndex={props.index}
        duration={0.1}
        end={{ opacity: 1, transform: "translateY-10px)" }}
        start={{ opacity: 0, transform: "translateY(+10)" }}
      >
        <h1>{props.value}</h1>
      </Animate>
    </div>
  );
}

class Itemtabe extends React.Component {
  render() {
    const list = [
      { id: 1, letter: "W" },
      { id: 2, letter: "e" },
      { id: 3, letter: "b" },
      { id: 4, letter: "b" },
      { id: 5, letter: "D" },
      { id: 6, letter: "e" },
      { id: 7, letter: "v" }
    ];

    const listItems = list.map((list, index) => (
      <ListItem key={list.id} index={index} value={list.letter} />
    ));

    return <AnimateGroup play>{listItems}</AnimateGroup>;
  }
}

class Square1 extends React.PureComponent {
  state = {
    play: false
  };

  render() {
    const divStyle = {
      display: "block",
      width: 50,
      height: 55,
      background: "rgb(255, 117, 26)",
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
      background: "rgb(51, 153, 51)",
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
      background: "rgb(255, 255, 102)",
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
      background: "rgb(255, 255, 102)",
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
                backgroundColor: "rgb(51, 153, 51)",
                textAlign: "center",
                borderRadius: "3px",
                padding: "5px",
                margin: "2px"              }}
            >
              <h2>Nybörjare</h2>
            </Col>

            <Col
              style={{
                backgroundColor: "rgb(255, 255, 102)",
                textAlign: "center",
                borderRadius: "3px",
                padding: "5px",
                margin: "2px"              }}
            >
              <h2>Medel</h2>
            </Col>

            <Col
              style={{
                backgroundColor: "rgb(255, 77, 77)",
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
            borderBottom: "2px solid white"
          }}>
            <Col sm={3}>
            <h3>Design</h3>
            </Col>
            <Col sm={8}>
              <Square1 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "2px solid white"
          }}>
            <Col sm={3}>
            <h3>Kodning</h3>
            </Col>
            <Col sm={8}>
              <Square3 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "2px solid white"
          }}>
            <Col sm={3}>
            <h3>Animering</h3>
            </Col>
            <Col sm={8}>
              <Square4 />
            </Col>
          </Row>

          <Row style={{
            borderBottom: "2px solid white"
          }}>
            <Col sm={3}>
            <h3>Illustration</h3>
            </Col>
            <Col sm={8}>
              <Square2 />
            </Col>
          </Row>
        </Container>

        <div className="sideBar">
            <Itemtabe />
      </div>

      </Layout>

    );
  }
}

export default App;
