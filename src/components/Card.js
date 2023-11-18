import React from 'react'

export default function Card(props) {
    const {imgurl} = props;
  return (
    <div>
      <div className="cardm container">
        <div className="card">
        <div className="row">
          <div className="items col-md">
            <div className="bg-image">
              <a href="/"><img src={imgurl} className="img-fluid" alt="Sample" /></a>
              <div className="mask">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
