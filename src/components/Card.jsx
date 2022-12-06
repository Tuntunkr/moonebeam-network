import React from "react";
// import dummy from "../Compt/Card/cardimg.png"
import "../Compt/Card/Card.css"

export default function Card({ image, title, author, url }) {

	return (
		<>
		{/* <section className="container-fluid">
        <div className="container">
          <div className="card">
            <img src={image} alt="" />
            <div className="spcingH">
              <div className="d-flex justify-content-between">
                <div className="txt">
                  <h3>{title}</h3>
                </div>

              </div>
              <div className="d-flex justify-content-between">
                <h5 className="subhd">{author}</h5><a style={{color:"var(--accent-color1)"}}
				href={url}
			>
				Read More
			</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}


		<div className="card">
			<div className="card-image">
				<img src={image} alt="super1" />
			</div>
			<div className="card-content">
				<div className="card-heading">
					<span className="card-series"></span>
				</div>
				<div className="card-details">
					<h4 className="card-title">{title}</h4>
				</div>
			</div>
			<div className="card-sub-details">
					<span>{author}</span>
					<a style={{color:"var(--accent-color1)"}}
				href={url}
			>
				Read More
			</a>
				</div>
			
		</div>
		</>
	);
}
