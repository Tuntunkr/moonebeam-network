import React from "react";
import "./Home.css"
import { Row, Col } from "react-bootstrap";
import homeimg from "./moonbeam.png";
import Card from "../Card/Card"

function Home() {
  return (
    <>
      <section className="container-fluid heroSection">
        <div className="container">
          <Row>
            <Col xs={12} md={6} lg={6} className="d-flex align-items-center">
              <div>
                <h1 className="title">The Future is Multi-Chain</h1>

                <p className="description">
                  Expand to new chains. Powered by Moonbeam, an
                  Ethereum-compatible smart contract parachain on Polkadot.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="imgCol">
              <img src={homeimg} alt="home" />
            </Col>
          </Row>
        </div>
      </section>
      <Card/>
    </>
  );
}

export default Home;
