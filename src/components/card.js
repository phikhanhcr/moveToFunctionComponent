import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Card() {
  return (
    <div className="Product col-lg-3 col-sm-6 col-12">
      <div className="wrapper-card">
        <img src="https://placekitten.com/640/360" />
        <div className="wrapper-infor">
          <h4>Title</h4>
          <p className="des">Truyen thieu nhi</p>
          <a href="#" className="btn btn-outline-primary">View</a>
        </div>
      </div>
    </div>

  );
}
export default Card;