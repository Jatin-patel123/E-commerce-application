import React from 'react';

export default function Product(props) {
  const { p1, p2, p3, title, price, no} = props;
  const carouselId = `carouselExample-${no}`;

  return (
    <div>
      <div className="procard container">
        <div className="procard">
          <div className="row">
            <div className="items col-md">
              <div className="bg-image">
                <div id={carouselId} className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={p1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={p2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={p3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h3>${price}</h3>
                <a className="wish" href="/"><i className="fa fa-heart-o"></i></a>
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
              <div className="mask"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
