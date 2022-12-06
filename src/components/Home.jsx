import React from "react";
import homeimg from "../Compt/Home/moonbeam.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h3 className="description">
            Expand to new chains. Powered by<br/> Moonbeam, an
            Ethereum-compatible<br/> smart contract parachain on Polkadot.
          </h3>
          <a href="/articles"><button>Read More</button></a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={homeimg} alt="home" />
          </div>
        </div>
      </div>

    </div>
  );
}
