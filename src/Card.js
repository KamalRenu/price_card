import React from 'react'

function Card(props) {
    return (
        <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
          <div className="card-body font-14">
            <h5 className="mt-3 mb-1 font-weight-medium">{props.data.level}</h5>
            <h6 className="subtitle font-weight-normal">For Team of {props.data.members} Members</h6>
            <div className="pricing my-3">
              <sup>$</sup>
              <span className="monthly display-5">{props.data.price}</span>
              <span className="yearly display-5">240</span>
              <small className="monthly">/mo</small>
              <small className="yearly">/yr</small>
              <span className="d-block">Save <span className="font-weight-medium">${props.data.saving}</span> a Year</span>
            </div>
            <ul className="list-inline">
              {
                props.data.features.map((elem)=><li className="d-block py-2">{elem.content}</li>)
              }
            </ul>
            <div className="bottom-btn">
            <a className={props.data.button} href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card
