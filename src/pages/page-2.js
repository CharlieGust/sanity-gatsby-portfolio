import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Animate, AnimateGroup } from "react-simple-animate";

function ListItem(props) {
  return (
    <div className="hejsan" style={{  marginLeft: "1rem", display: "inline-block", color: "#E63946"}}>
      <Animate
        style={{}}
        sequenceIndex={props.index}
        duration={0.2}
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
      { id: 1, letter: "V" },
      { id: 2, letter: "ä" },
      { id: 3, letter: "l" },
      { id: 4, letter: "k" },
      { id: 5, letter: "o" },
      { id: 6, letter: "m" },
      { id: 8, letter: "m" },
      { id: 9, letter: "e" },
      { id: 10, letter: "n" },
      { id: 11, letter: "!" },

    ];

    const listItems = list.map((list, index) => (
      <ListItem key={list.id} index={index} value={list.letter} />
    ));

    return <AnimateGroup play>{listItems}</AnimateGroup>;
  }
}

const SecondPage = () => (
  
  <Layout>
    <SEO title="Page two" />
    <div style={{paddingTop: "1rem", width: `25%`,  marginRight: "1.45rem", float: "left"}}>
      <Image />
    </div>
    
    <div style={{paddingTop: "1rem", color: "white", paddingBottom: "4.5rem"}}>
    <Itemtabe />

      <p>
      Till min portfölj. Jag heter Charlie och sysslar med webbutvecklng och gjort i ett par år. Gillar 
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React</a> men är flexibel och någorlunda lättlärd.
      Den här sidan är byggd med<a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer"> Gatsby</a> som är baserat på React och <a href="https://www.sanity.io." target="_blank" rel="noopener noreferrer">Sanity </a>
       som hanterar sidans projekt.
      </p>

      <p>
        Förutom att debugga och svära åt <code>div</code> element umgås jag med min sambo och vänner. Att omringa mig 
        med människor som utmanar mig både personligt och intellektuellt är ett av mina mål.
      </p>

      <p>
        Istället för lista mina egenskaper och kunskaper (det är så många) får du hellre skicka ett mail och fråga 
        <strong> charlie.gustavsson@gmail.com</strong>

      </p>


      </div>

  </Layout>
)

export default SecondPage
